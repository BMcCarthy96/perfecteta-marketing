import type { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Wider max-width for hero-style sections */
  wide?: boolean;
};

export function SectionContainer({
  id,
  children,
  className = "",
  wide = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${wide ? "" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
