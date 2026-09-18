"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Layers,
  Image as ImageIcon,
  ExternalLink,
  LogOut,
  ShieldAlert,
  Loader2,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // If on login page, skip check
    if (pathname === "/admin/login") {
      setCheckingAuth(false);
      return;
    }

    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth");
        const data = await res.json();
        if (!data.authenticated) {
          router.push("/admin/login");
        } else {
          setAuthenticated(true);
        }
      } catch (err) {
        router.push("/admin/login");
      } finally {
        setCheckingAuth(false);
      }
    }

    checkAuth();
  }, [pathname, router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
    } catch (e) {
      router.push("/admin/login");
    }
  };

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF8F9]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="animate-spin text-[#6C0798]" size={32} />
          <p className="font-sans text-xs font-medium text-[#19151C]/60">
            Checking admin permissions...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F9] text-[#19151C]">
      {/* Admin Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-[#19151C]/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C0798]/10 p-1">
                <Image
                  src="/school_logo.png"
                  alt="Agape Academy"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-base font-semibold text-[#19151C]">
                  Agape Academy
                </span>
                <span className="ml-2 rounded bg-[#6C0798]/10 px-1.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-[#6C0798]">
                  Media CMS
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Links & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#19151C]/10 px-3.5 py-1.5 font-sans text-xs font-medium text-[#19151C]/70 transition-colors hover:border-[#6C0798] hover:text-[#6C0798]"
            >
              <span>View Website</span>
              <ExternalLink size={12} />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#19151C]/5 px-3.5 py-1.5 font-sans text-xs font-medium text-[#19151C]/80 transition-colors hover:bg-red-50 hover:text-red-700"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
