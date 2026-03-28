import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-navy text-white shadow-soft hover:bg-brand-navy-soft hover:shadow-card focus-visible:outline-brand-teal",
  secondary:
    "bg-brand-teal text-white shadow-soft hover:bg-brand-teal-light hover:shadow-card focus-visible:outline-brand-navy",
  outline:
    "border-2 border-brand-navy/15 bg-white/80 text-brand-navy backdrop-blur-sm hover:border-brand-teal/40 hover:bg-white focus-visible:outline-brand-teal",
  ghost:
    "text-brand-navy hover:bg-brand-navy/5 focus-visible:outline-brand-teal",
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export type CtaButtonProps =
  | (BaseProps & {
      href: string;
      external?: boolean;
    })
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement>);

export function CtaButton(props: CtaButtonProps) {
  if ("href" in props && props.href) {
    const { href, external, children, className = "", variant = "primary" } =
      props;
    const styles = `${base} ${variants[variant]} ${className}`;
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className = "",
    variant = "primary",
    type = "button",
    ...rest
  } = props as BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
  const styles = `${base} ${variants[variant]} ${className}`;
  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  );
}
