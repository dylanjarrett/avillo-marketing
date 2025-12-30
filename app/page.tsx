"use client";

import Image from "next/image";

export default function MarketingHomePage() {
  const betaSubject = "Avillo Beta Request";
  const betaBody = [
    "Hi Avillo team,",
    "",
    "I’m interested in joining the private beta.",
    "",
    "Market (city / state):",
    "How I operate today (just me / team):",
    "One thing that feels harder than it should:",
    "",
    "Best,",
    "",
  ].join("\n");

  const betaMailto = `mailto:sales@avillo.io?subject=${encodeURIComponent(
    betaSubject
  )}&body=${encodeURIComponent(betaBody)}`;

  const feedbackSubject = "Avillo Beta Feedback";
  const feedbackBody = [
    "Hi Avillo team,",
    "",
    "Here’s feedback that would make Avillo feel 10x better:",
    "",
    "-",
    "",
    "Best,",
    "",
  ].join("\n");

  const feedbackMailto = `mailto:support@avillo.io?subject=${encodeURIComponent(
    feedbackSubject
  )}&body=${encodeURIComponent(feedbackBody)}`;

  return (
    <div className="min-h-screen">
      {/* Subtle background glow (simple + premium) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(244,210,106,0.22),transparent_60%)]" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[560px] w-[560px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 xl:max-w-7xl 2xl:max-w-[88rem]">
          <div className="flex items-center gap-3">
            <Image
              src="/avillo-logo-cream.png"
              alt="Avillo"
              width={160}
              height={56}
              priority
              className="h-auto w-[150px] drop-shadow-[0_0_40px_rgba(244,210,106,0.25)]"
            />
          </div>

          <div className="flex items-center gap-2">
            <a
              href={betaMailto}
              className="inline-flex items-center justify-center rounded-full border border-[var(--avillo-gold)] bg-[linear-gradient(135deg,var(--avillo-gold),#facc15)] px-4 py-2 text-xs font-semibold text-[#14110a] shadow-[0_0_22px_rgba(244,210,106,0.35)] transition hover:brightness-[1.03]"
            >
              Request beta
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-5 py-14 xl:max-w-7xl 2xl:max-w-[88rem]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--avillo-cream-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--avillo-gold)] shadow-[0_0_16px_rgba(244,210,106,0.6)]" />
            Private beta • pioneer cohorts
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] text-[var(--avillo-cream)] md:text-5xl">
            Your AI command center for real estate.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--avillo-cream-soft)]/90">
            Avillo keeps your listings, contacts, and follow-up in one clean workspace — so you spend
            less time bouncing between tools and more time moving deals forward.
          </p>

          {/* ✅ Who it’s for (added) */}
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[var(--avillo-cream-muted)]">
            Designed for solo agents and small teams who want leverage without CRM bloat.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={betaMailto}
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--avillo-gold)] bg-[linear-gradient(135deg,var(--avillo-gold),#facc15)] px-7 py-3 text-sm font-semibold text-[#14110a] shadow-[0_0_30px_rgba(244,210,106,0.35)] transition hover:brightness-[1.03] sm:w-auto"
            >
              Request beta access
            </a>

            <a
              href={feedbackMailto}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-[var(--avillo-cream)] transition hover:border-[var(--avillo-gold)] hover:bg-[rgba(244,210,106,0.08)] sm:w-auto"
            >
              I want to give feedback
            </a>
          </div>

          <p className="mt-3 text-xs text-[var(--avillo-cream-muted)]">
            Small cohorts. Fast iteration. Built with real agents.
          </p>

          {/* ✅ Credibility anchor (added) */}
          <p className="mt-2 text-[11px] text-[var(--avillo-cream-muted)]">
            Built and tested alongside active agents in California and Arizona.
          </p>
        </div>

        {/* SIMPLE VALUE CARDS */}
        <section className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              title: "One workspace",
              body: "A clean home for contacts, listings, and notes — without the CRM bloat.",
            },
            {
              title: "AI that saves time",
              body: "Draft follow-ups and listing content faster (you stay in control).",
            },
            {
              title: "Built to refine",
              body: "You help shape the product. We ship improvements quickly based on real usage.",
            },
          ].map((x) => (
            <div key={x.title} className="avillo-card p-5">
              <p className="text-sm font-semibold text-[var(--avillo-cream)]">{x.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--avillo-cream-soft)]/90">
                {x.body}
              </p>
            </div>
          ))}
        </section>

        {/* SIMPLE “HOW IT WORKS” */}
        <section className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--avillo-cream-muted)]">
              How beta works
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { t: "1) Request access", d: "We onboard small cohorts so feedback stays tight." },
                { t: "2) Use it on real deals", d: "Test Avillo with your actual listings + pipeline." },
                { t: "3) Give feedback", d: "We iterate quickly based on what you need most." },
              ].map((x) => (
                <div key={x.t} className="avillo-card p-5">
                  <p className="text-sm font-semibold text-[var(--avillo-cream)]">{x.t}</p>
                  <p className="mt-2 text-sm text-[var(--avillo-cream-soft)]/90">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--avillo-cream)]">Want in?</p>
                <p className="mt-1 text-sm text-[var(--avillo-cream-soft)]/90">
                  Email us and we’ll set you up with the next cohort.
                </p>
                {/* ✅ Structured expectation (supports prefilled mailto) */}
                <p className="mt-2 text-xs text-[var(--avillo-cream-muted)]">
                  Tip: include your market, team size, and one thing you want Avillo to improve.
                </p>
              </div>

              <a
                href={betaMailto}
                className="inline-flex items-center justify-center rounded-full border border-[var(--avillo-gold)] bg-[linear-gradient(135deg,var(--avillo-gold),#facc15)] px-6 py-3 text-sm font-semibold text-[#14110a] shadow-[0_0_26px_rgba(244,210,106,0.30)] transition hover:brightness-[1.03]"
              >
                Request beta
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mx-auto mt-12 max-w-5xl border-t border-white/10 pt-6 text-xs text-[var(--avillo-cream-muted)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Avillo, Inc.</p>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-[var(--avillo-cream)]" href="mailto:support@avillo.io">
                Support
              </a>
              <a className="hover:text-[var(--avillo-cream)]" href="mailto:billing@avillo.io">
                Billing
              </a>
              <a className="hover:text-[var(--avillo-cream)]" href="mailto:sales@avillo.io">
                Sales
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
