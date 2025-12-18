export const metadata = {
  title: "Privacy Policy • Avillo",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F2EBDD]">
      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[#F2EBDD]/60">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[#F2EBDD]/70">
          Effective date: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-[#F2EBDD]/80">
          <p>
            Avillo (“Avillo,” “we,” “us”) provides software tools for real estate
            professionals. This Privacy Policy explains how we collect, use, and
            protect information when you use our website, platform, and SMS
            opt-in flow.
          </p>

          <div>
            <p className="font-semibold text-[#F2EBDD]">Information we collect</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Contact details you provide (name, email, phone number) during
                beta requests or SMS opt-in.
              </li>
              <li>
                Consent metadata (date/time, source page) to document your SMS
                preferences.
              </li>
              <li>
                Basic technical data (device/browser data) for security and
                performance.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">How we use information</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To provide and improve the Avillo product and beta program.</li>
              <li>
                To communicate with you about your account, onboarding, and
                product updates.
              </li>
              <li>
                To maintain compliance for messaging (e.g., opt-in/opt-out
                records).
              </li>
              <li>To prevent fraud and keep the platform secure.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">SMS privacy</p>
            <p className="mt-2">
              If you opt in to receive SMS, we will store your phone number and
              consent record. You can opt out at any time by replying{" "}
              <span className="text-[#F4D26A]">STOP</span>. For help, reply{" "}
              <span className="text-[#F4D26A]">HELP</span> or email{" "}
              <span className="text-[#F4D26A]">support@avillo.io</span>.
            </p>
            <p className="mt-2">
              Message frequency varies. Message and data rates may apply.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">Data sharing</p>
            <p className="mt-2">
              We do not sell your personal information. We may share information
              with service providers who help us operate the product (e.g.,
              messaging or infrastructure providers) under appropriate
              contractual safeguards.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">Contact</p>
            <p className="mt-2">
              Questions? Email{" "}
              <a className="text-[#F4D26A] underline" href="mailto:hello@avillo.io">
                hello@avillo.io
              </a>
              .
            </p>
          </div>

          <p className="text-[12px] text-[#F2EBDD]/55">
            This policy is provided for general transparency during private beta
            and may be updated as Avillo evolves.
          </p>
        </div>
      </div>
    </div>
  );
}