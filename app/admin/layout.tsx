"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ExternalLink, LogOut, Loader2 } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
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
          <Loader2 className="animate-spin text-[#6C0798]" size={26} />
          <p className="font-sans text-xs text-[#19151C]/60">
            Checking access...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F9] text-[#19151C] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#19151C]/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-10 lg:px-12">
          {/* School Brand */}
          <Link href="/admin" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F9] p-1.5 ring-1 ring-[#19151C]/10 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/school_logo.png"
                alt="Agape Academy International"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-base text-[#19151C]">
                  Agape Academy
                </span>
                <span className="font-serif text-sm italic text-[#6C0798]">
                  International
                </span>
              </div>
              <p className="font-sans text-[11px] font-medium text-[#19151C]/50">
                Photo Manager
              </p>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#19151C]/70 transition-colors hover:text-[#6C0798]"
            >
              <span>View Website</span>
              <ExternalLink size={13} />
            </Link>

            <div className="h-4 w-px bg-[#19151C]/10" />

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#19151C]/60 transition-colors hover:text-red-600"
            >
              <LogOut size={14} />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
