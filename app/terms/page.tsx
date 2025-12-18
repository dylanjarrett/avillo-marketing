export const metadata = {
  title: "Terms of Service • Avillo",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F2EBDD]">
      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[#F2EBDD]/60">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Terms of Service</h1>
        <p className="mt-2 text-sm text-[#F2EBDD]/70">
          Effective date: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-[#F2EBDD]/80">
          <p>
            By accessing or using Avillo, you agree to these Terms of Service.
            If you do not agree, do not use the service.
          </p>

          <div>
            <p className="font-semibold text-[#F2EBDD]">Private beta</p>
            <p className="mt-2">
              Avillo may be offered as a private beta. Features may change,
              improve, or be removed. Availability is not guaranteed.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">Acceptable use</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use Avillo in compliance with applicable laws.</li>
              <li>
                Do not use Avillo for spam, harassment, or unlawful messaging.
              </li>
              <li>
                You are responsible for ensuring you have permission to message
                your contacts.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">SMS terms</p>
            <p className="mt-2">
              If you opt in to receive SMS from Avillo, message frequency varies.
              Message and data rates may apply. Reply{" "}
              <span className="text-[#F4D26A]">STOP</span> to opt out and{" "}
              <span className="text-[#F4D26A]">HELP</span> for help. Support:
              <span className="text-[#F4D26A]"> support@avillo.io</span>.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#F2EBDD]">Disclaimer</p>
            <p className="mt-2">
              Avillo is provided “as is” and “as available.” We do not guarantee
              uninterrupted service, error-free operation, or specific business
              outcomes.
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
            These terms may be updated as Avillo evolves.
          </p>
        </div>
      </div>
    </div>
  );
}