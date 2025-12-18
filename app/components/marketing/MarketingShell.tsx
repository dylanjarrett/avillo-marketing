// app/components/marketing/MarketingShell.tsx
import React from "react";

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(244,210,106,0.14),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.95),#050814)] text-[var(--avillo-cream)]">
      {/* Top nav */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-5 py-4 lg:px-8">
          <div className="rounded-2xl bg-black/20 backdrop-blur-xl ring-1 ring-white/10">
            <div className="flex items-center justify-between px-4 py-3 lg:px-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-wide">Avillo</span>
                <span className="hidden text-[11px] text-[var(--avillo-cream-muted)] md:inline">
                  AI operating system for real estate
                </span>
              </div>

              <a
                href="#request"
                className="inline-flex items-center justify-center rounded-full bg-[var(--avillo-gold)] px-4 py-2 text-xs font-semibold text-[#14110a] shadow-[0_0_24px_rgba(244,210,106,0.35)] transition hover:brightness-105"
              >
                Request beta
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page */}
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 lg:px-8">
        <div className="space-y-16">{children}</div>
      </main>

      {/* Footer */}
      <footer className="pb-10">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="rounded-2xl bg-black/20 ring-1 ring-white/10">
            <div className="flex flex-col gap-3 px-5 py-5 text-xs text-[var(--avillo-cream-muted)] md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Avillo, Inc.</p>
              <div className="flex items-center gap-4">
                <a className="hover:text-[var(--avillo-cream)]" href="mailto:sales@avillo.io">sales@avillo.io</a>
                <a className="hover:text-[var(--avillo-cream)]" href="mailto:support@avillo.io">support@avillo.io</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
