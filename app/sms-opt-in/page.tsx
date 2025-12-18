"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  consent: boolean;
  // honeypot (spam)
  company: string;
};

function normalizePhone(input: string) {
  // Keep digits only; allow leading 1 for US
  const digits = input.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  // fallback
  return digits.startsWith("1") && digits.length === 11 ? `+${digits}` : `+${digits}`;
}

function isLikelyValidE164(phone: string) {
  // Basic E.164 check for + and 10-15 digits
  return /^\+\d{10,15}$/.test(phone);
}

export default function SmsOptInPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    consent: false,
    company: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const e164Phone = useMemo(() => normalizePhone(form.phone), [form.phone]);

  const canSubmit = useMemo(() => {
    if (submitting) return false;
    if (!form.consent) return false;
    if (!form.firstName.trim()) return false;
    if (!form.phone.trim()) return false;
    if (!isLikelyValidE164(e164Phone)) return false;
    return true;
  }, [submitting, form.consent, form.firstName, form.phone, e164Phone]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // If honeypot filled, silently succeed (anti-bot)
    if (form.company.trim()) {
      setStatus("success");
      setMessage("You’re in. Thanks — we’ll keep it clean and respectful.");
      return;
    }

    setSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/sms/opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: e164Phone,
          email: form.email.trim() || null,
          consent: form.consent,
          consentText:
            "I agree to receive SMS messages from Avillo and understand that message & data rates may apply. Reply STOP to opt out, HELP for help.",
          source: "sms-opt-in-page",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Opt-in confirmed. You can reply STOP at any time.");
      setForm((prev) => ({
        ...prev,
        consent: false,
        company: "",
        phone: "",
        email: "",
      }));
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F2EBDD]">
      {/* Subtle glow background */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2D5BFF]/15 blur-3xl" />
        <div className="absolute -bottom-40 right-12 h-[520px] w-[520px] rounded-full bg-[#F4D26A]/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/10">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/avillo-logo-cream.png"
              alt="Avillo"
              width={180}
              height={60}
              priority
              className="h-auto w-[150px] drop-shadow-[0_0_30px_rgba(244,210,106,0.25)]"
            />
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-widest text-[#F2EBDD]/70 sm:inline-flex">
              SMS CONSENT • PRIVATE BETA
            </span>

            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-[#F2EBDD]/80 hover:bg-white/10"
            >
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="relative mx-auto w-full max-w-2xl px-6 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-widest text-[#F2EBDD]/80 sm:hidden">
            SMS CONSENT • PRIVATE BETA
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight">SMS Opt-In</h1>
          <p className="mt-2 text-sm leading-relaxed text-[#F2EBDD]/70">
            Avillo supports agent-initiated messaging. We keep it 1:1, respectful, and opt-out friendly.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.45)]">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Honeypot */}
            <div className="hidden">
              <label className="text-xs">Company</label>
              <input
                value={form.company}
                onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                className="w-full"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-[#F2EBDD]/70">First name</label>
                <input
                  value={form.firstName}
                  onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1220]/60 px-4 py-3 text-sm text-[#F2EBDD] outline-none placeholder:text-[#F2EBDD]/30 focus:border-[#2D5BFF]/40 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]"
                  placeholder="Dylan"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-[#F2EBDD]/70">Last name</label>
                <input
                  value={form.lastName}
                  onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1220]/60 px-4 py-3 text-sm text-[#F2EBDD] outline-none placeholder:text-[#F2EBDD]/30 focus:border-[#2D5BFF]/40 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]"
                  placeholder="Jarrett"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[#F2EBDD]/70">Mobile number</label>
              <input
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1220]/60 px-4 py-3 text-sm text-[#F2EBDD] outline-none placeholder:text-[#F2EBDD]/30 focus:border-[#2D5BFF]/40 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]"
                placeholder="(555) 555-5555"
                inputMode="tel"
                required
              />
              <p className="mt-2 text-[11px] text-[#F2EBDD]/55">
                We’ll store your number in E.164 format:{" "}
                <span className="text-[#F4D26A]/90">{e164Phone || "—"}</span>
              </p>
              {!isLikelyValidE164(e164Phone) && form.phone.trim().length > 0 && (
                <p className="mt-1 text-[11px] text-red-300/90">
                  Enter a valid US phone number (10 digits). Example: (555) 555-5555.
                </p>
              )}
            </div>

            <div>
              <label className="text-xs text-[#F2EBDD]/70">Email (optional)</label>
              <input
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1220]/60 px-4 py-3 text-sm text-[#F2EBDD] outline-none placeholder:text-[#F2EBDD]/30 focus:border-[#2D5BFF]/40 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]"
                placeholder="you@domain.com"
                inputMode="email"
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-[#0B1220]/60 text-[#F4D26A] focus:ring-[#F4D26A]/30"
                  required
                />
                <div>
                  <div className="text-sm">I agree to receive SMS messages from Avillo.</div>
                  <div className="mt-1 text-[12px] leading-relaxed text-[#F2EBDD]/60">
                    Message frequency varies. Message & data rates may apply. Reply{" "}
                    <span className="text-[#F4D26A]/90">STOP</span> to opt out,{" "}
                    <span className="text-[#F4D26A]/90">HELP</span> for help.
                  </div>
                </div>
              </label>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!canSubmit}
                className={[
                  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                  canSubmit
                    ? "bg-[#F4D26A] text-[#0B1220] shadow-[0_0_0_1px_rgba(244,210,106,0.35),0_20px_60px_rgba(244,210,106,0.18)] hover:brightness-105"
                    : "cursor-not-allowed bg-white/10 text-[#F2EBDD]/40",
                ].join(" ")}
              >
                {submitting ? "Confirming…" : "Confirm opt-in"}
              </button>

              <div className="text-[11px] text-[#F2EBDD]/55">
                By opting in, you’re joining Avillo’s feedback loop.
              </div>
            </div>

            {status !== "idle" && (
              <div
                className={[
                  "rounded-xl border p-4 text-sm",
                  status === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                    : "border-red-400/20 bg-red-400/10 text-red-100",
                ].join(" ")}
              >
                {message}
              </div>
            )}

            <div className="pt-2 text-[11px] leading-relaxed text-[#F2EBDD]/55">
              <p className="font-medium text-[#F2EBDD]/70">How Avillo uses SMS</p>
              <p className="mt-1">
                Avillo is a workflow tool for agents. Messages are user-initiated, 1:1, and opt-out is always honored.
              </p>
              <p className="mt-1">
                Questions? <span className="text-[#F4D26A]/90">support@avillo.io</span>
              </p>
              <p className="mt-2">
                <a href="/terms" className="text-[#F4D26A]/90 underline" target="_blank" rel="noopener">
                    Terms
                </a>{" "}
                •{" "}
                <a href="/privacy" className="text-[#F4D26A]/90 underline" target="_blank" rel="noopener">
                    Privacy Policy
                </a>
                </p>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-[11px] text-[#F2EBDD]/40">
          © {new Date().getFullYear()} Avillo • AI Operating System for Real Estate
        </div>
      </main>
    </div>
  );
}