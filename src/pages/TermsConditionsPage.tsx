import { ArrowRight } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface TermsConditionsPageProps {
  onNavigate: (path: string) => void;
}

export default function TermsConditionsPage({ onNavigate }: TermsConditionsPageProps) {
  return (
    <div>
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              The terms under which we provide our cleaning services
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">Last updated: 30 July 2026</p>

          <div className="mt-10 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Acceptance of Terms
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                By booking a cleaning service with Prime One Cleaning Ltd, you
                agree to be bound by these Terms &amp; Conditions. If you do not
                agree with any part of these terms, please do not proceed with
                booking our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Service Description
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Prime One Cleaning Ltd provides professional cleaning services
                for residential, commercial and end-of-tenancy properties across
                Luton and the wider Bedfordshire area. The scope of each cleaning
                service will be agreed at the time of booking. We reserve the
                right to decline any service request at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Booking &amp; Cancellation Policy
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                All bookings must be made in advance by phone, email or through
                our website. If you need to cancel or reschedule a booking,
                please provide at least 24 to 48 hours' notice. Cancellations
                made with less than 24 hours' notice may be subject to a
                cancellation fee equivalent to 50% of the agreed service cost.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Payment Terms
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Payment is due upon completion of the cleaning service unless
                otherwise agreed in writing. We accept bank transfer and major
                debit/credit cards. For regular contracted cleaning, invoices
                are issued in advance of each billing cycle and are payable
                within 7 days of the invoice date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Liability &amp; Insurance
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Prime One Cleaning Ltd is fully insured with public liability
                cover. We take reasonable care in carrying out our services and
                accept liability for direct damage caused to your property by our
                negligence. We do not accept liability for pre-existing damage,
                wear and tear, or items that are fragile or of significant value
                unless we have been notified in writing prior to the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Access to Premises
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                You agree to provide our cleaning operatives with safe and
                reasonable access to the premises, including any necessary
                instructions, keys or access codes. We are not responsible for
                delays or inability to complete the service where access is
                restricted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Contact Us
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                If you have any questions about these Terms &amp; Conditions,
                please contact us at{" "}
                <a
                  href="mailto:info@primeonecleaning.co.uk"
                  className="font-semibold text-[#3b82f6] hover:text-[#2563eb]"
                >
                  info@primeonecleaning.co.uk
                </a>
                .
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate("/contact")}
            className="mt-12 inline-flex items-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2563eb]"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} />
    </div>
  );
}
