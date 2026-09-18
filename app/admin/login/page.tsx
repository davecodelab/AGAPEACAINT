"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, ArrowRight, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

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
        throw new Error(data.error || "Incorrect passphrase");
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#19151C] px-6 py-16 text-white">
      <div className="w-full max-w-md">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 p-3 shadow-xl backdrop-blur-md">
            <Image
              src="/school_logo.png"
              alt="Agape Academy International"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9C7DE]">
            <ShieldCheck size={13} />
            Administrator Access
          </span>

          <h1 className="mt-3 font-serif text-3xl sm:text-4xl">Media CMS</h1>
          <p className="mt-2 font-sans text-xs text-white/60">
            Agape Academy International Website Management
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl"
        >
          {error && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
              <AlertCircle size={16} className="shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block font-sans text-xs font-semibold text-white/80">
              Master Admin Passphrase
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                required
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                placeholder="Enter passphrase..."
                className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 pl-10 font-sans text-sm text-white outline-none placeholder:text-white/30 focus:border-[#6C0798] focus:bg-white/15 focus:ring-2 focus:ring-[#6C0798]/30"
              />
              <Lock
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !passphrase}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#6C0798] font-sans text-sm font-semibold text-white transition-all hover:bg-[#4B075F] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                Unlock Media CMS
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="mt-6 text-center font-sans text-[11px] text-white/40">
            Passphrase configured in your environment as <code className="text-white/60">ADMIN_SECRET_KEY</code>
          </p>
        </form>
      </div>
    </div>
  );
}
