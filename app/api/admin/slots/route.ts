import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { DEFAULT_SLOTS, MediaSlot } from "@/lib/media-slots";

export async function GET() {
  try {
    const slotsMap: Record<string, MediaSlot> = { ...DEFAULT_SLOTS };

    if (isSupabaseConfigured() && supabase) {
      const { data, error } = await supabase
        .from("site_media_slots")
        .select("*");

      if (!error && data) {
        data.forEach((row: any) => {
          if (slotsMap[row.id]) {
            slotsMap[row.id] = {
              ...slotsMap[row.id],
              currentUrl: row.cloudinary_url || slotsMap[row.id].currentUrl,
              altText: row.alt_text || slotsMap[row.id].altText,
              updatedAt: row.updated_at,
            };
          } else {
            slotsMap[row.id] = {
              id: row.id,
              section: row.section || "homepage",
              label: row.label || row.id,
              description: row.description || "",
              aspectRatio: row.aspect_ratio || "16:9",
              recommendedDimensions: row.recommended_dimensions || "1920x1080",
              currentUrl: row.cloudinary_url,
              altText: row.alt_text || "",
              updatedAt: row.updated_at,
            };
          }
        });
      }
    }

    return NextResponse.json({
      success: true,
      slots: Object.values(slotsMap),
      isSupabaseConnected: isSupabaseConfigured(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("aai_admin_token")?.value;
    if (token !== "authenticated") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { id, cloudinary_url, cloudinary_public_id, alt_text } = body;

    if (!id || !cloudinary_url) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (id, cloudinary_url)" },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured() || !supabase) {
      return NextResponse.json(
        {
          success: false,
          error: "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local to persist changes.",
        },
        { status: 503 }
      );
    }

    const defaultSlot = DEFAULT_SLOTS[id];
    const updatePayload: any = {
      id,
      section: defaultSlot?.section || "homepage",
      label: defaultSlot?.label || id,
      description: defaultSlot?.description || "",
      aspect_ratio: defaultSlot?.aspectRatio || "16:9",
      recommended_dimensions: defaultSlot?.recommendedDimensions || "1920x1080",
      cloudinary_url,
      cloudinary_public_id: cloudinary_public_id || null,
      alt_text: alt_text || defaultSlot?.altText || "",
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("site_media_slots")
      .upsert(updatePayload, { onConflict: "id" })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      slot: data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
