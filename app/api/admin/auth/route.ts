import { NextRequest, NextResponse } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "agape2026!admin";
const COOKIE_NAME = "aai_admin_token";

export async function POST(req: NextRequest) {
  try {
    const { passphrase } = await req.json();

    if (!passphrase || passphrase !== ADMIN_SECRET) {
      return NextResponse.json(
        { success: false, error: "Invalid admin passphrase" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Authenticated successfully",
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: "authenticated",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated = token === "authenticated";

  return NextResponse.json({
    authenticated: isAuthenticated,
  });
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out",
  });

  response.cookies.delete(COOKIE_NAME);
  return response;
}
