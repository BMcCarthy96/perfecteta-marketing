import { ExternalLink } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { SITE } from "@/lib/site";

export function PortalLinkCard() {
  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-brand-navy/10 bg-white p-8 shadow-card md:p-10">
      <h1 className="font-display text-3xl font-semibold text-brand-navy">
        Member portal
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">
        Account access, documents, and member tools are hosted on our secure
        portal at{" "}
        <span className="font-medium text-brand-navy">perfectETA.com</span>.
        This marketing site ({SITE.marketingDomain}) is separate from login.
      </p>
      <div className="mt-8">
        {/* TODO: Update href when production login URL is final */}
        <CtaButton
          href={SITE.memberPortalUrl}
          external
          variant="primary"
          className="w-full sm:w-auto"
        >
          <span className="inline-flex items-center gap-2">
            Go to member login
            <ExternalLink className="h-4 w-4" aria-hidden />
          </span>
        </CtaButton>
      </div>
    </div>
  );
}
