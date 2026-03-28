import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function InfoCard({
  icon: Icon,
  title,
  description,
  children,
  className = "",
}: InfoCardProps) {
  return (
    <div
      className={`group flex flex-col rounded-2xl border border-brand-navy/8 bg-white p-6 shadow-card transition-all duration-300 hover:border-brand-teal/20 hover:shadow-card-hover ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-teal transition-colors group-hover:bg-brand-teal/10">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-brand-navy">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
        {description}
      </p>
      {children}
    </div>
  );
}
