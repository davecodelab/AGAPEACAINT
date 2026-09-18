"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Loader2, ArrowRight, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [passphrase, setPassphrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passphrase) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passphrase }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Incorrect password. Please try again.");
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#FAF8F9] px-6 py-8 sm:px-10">
      {/* Top Bar */}
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/school_logo.png"
            alt="Agape Academy International"
            width={34}
            height={34}
            className="object-contain"
          />
          <div>
            <span className="font-serif text-base text-[#19151C]">
              Agape Academy
            </span>
            <span className="font-serif text-sm italic text-[#6C0798] ml-1">
              International
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="font-sans text-xs text-[#19151C]/60 transition-colors hover:text-[#6C0798]"
        >
          ← Back to website
        </Link>
      </div>

      {/* Centered Login Card */}
      <div className="mx-auto my-auto w-full max-w-md">
        <div className="rounded-2xl border border-[#19151C]/10 bg-white p-8 shadow-sm sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C0798]/10 text-[#6C0798]">
              <Lock size={20} />
            </div>
            <h1 className="mt-5 font-serif text-2xl text-[#19151C] sm:text-3xl">
              Admin Login
            </h1>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#19151C]/60 sm:text-sm">
              Enter the admin password to manage and update photos across the website.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-3 text-center font-sans text-xs text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="passphrase"
                className="block font-sans text-xs font-semibold text-[#19151C]"
              >
                Password
              </label>
              <input
                id="passphrase"
                type="password"
                required
                autoFocus
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                placeholder="Enter password..."
                className="mt-1.5 h-11 w-full rounded-xl border border-[#19151C]/15 bg-[#FAF8F9] px-4 font-sans text-sm text-[#19151C] placeholder-[#19151C]/35 outline-none transition-all focus:border-[#6C0798] focus:bg-white focus:ring-1 focus:ring-[#6C0798]"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !passphrase}
              className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#6C0798] font-sans text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4B075F] disabled:opacity-40"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Simple Human Footer */}
      <div className="mx-auto w-full max-w-5xl text-center font-sans text-xs text-[#19151C]/40">
        © 2026 Agape Academy International
      </div>
    </div>
  );
}
