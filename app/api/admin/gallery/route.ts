import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "../../../../lib/supabase";

export async function GET() {
  try {
    if (!isSupabaseConfigured() || !supabase) {
      return NextResponse.json({
        success: true,
        photos: [],
        isSupabaseConnected: false,
      });
    }

    const { data, error } = await supabase
      .from("campus_gallery")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      photos: data || [],
      isSupabaseConnected: true,
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

    if (!isSupabaseConfigured() || !supabase) {
      return NextResponse.json(
        { success: false, error: "Supabase is not configured." },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { category, title, caption, cloudinary_url, cloudinary_public_id, sort_order } = body;

    if (!category || !title || !cloudinary_url) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (category, title, cloudinary_url)" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("campus_gallery")
      .insert([
        {
          category,
          title,
          caption: caption || "",
          cloudinary_url,
          cloudinary_public_id: cloudinary_public_id || null,
          sort_order: sort_order || 0,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      photo: data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get("aai_admin_token")?.value;
    if (token !== "authenticated") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!isSupabaseConfigured() || !supabase) {
      return NextResponse.json(
        { success: false, error: "Supabase is not configured." },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing photo id" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("campus_gallery").delete().eq("id", id);
    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
