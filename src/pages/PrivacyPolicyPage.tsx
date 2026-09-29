import { ArrowRight } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div>
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              How we collect, use and protect your information
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
                Information We Collect
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                When you contact us through our website's contact form, we
                collect the following information:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>The message you send us</li>
              </ul>
              <p className="mt-4 leading-relaxed text-slate-600">
                We only collect information that you voluntarily provide to us
                when enquiring about our services or requesting a quote.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                How We Use Your Information
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We use the information you provide to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>Respond to your enquiry and quote requests</li>
                <li>Provide and schedule our cleaning services</li>
                <li>Communicate with you about your booking</li>
                <li>Improve our services and customer experience</li>
              </ul>
              <p className="mt-4 leading-relaxed text-slate-600">
                We do not use your information for marketing purposes without
                your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Sharing Your Information
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We do not sell, rent or share your personal information with
                third parties, except where required by law or where necessary
                to provide our services (for example, sharing your address with
                a cleaning operative assigned to your booking). All staff who
                access your information are bound by confidentiality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Cookies
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our website may use cookies to improve your browsing experience.
                Cookies are small files stored on your device that help us
                understand how visitors use our site. You can disable cookies in
                your browser settings, though some features of the site may not
                function correctly without them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Data Security
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We take reasonable steps to protect your personal information
                against unauthorised access, loss or misuse. Your data is stored
                securely and is only accessible to authorised personnel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Your Rights
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                You have the right to request access to the personal information
                we hold about you, and to ask us to correct or delete it. You may
                also request that we stop using your information at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a1f44]">
                Contact Us
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                If you have any questions about this Privacy Policy or how we
                handle your information, please contact us at{" "}
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
