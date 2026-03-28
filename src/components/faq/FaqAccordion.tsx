"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faq-data";

type FaqAccordionProps = {
  items: FaqItem[];
  /** Allow multiple panels open; default single */
  allowMultiple?: boolean;
  className?: string;
};

export function FaqAccordion({
  items,
  allowMultiple = false,
  className = "",
}: FaqAccordionProps) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    if (allowMultiple) {
      setOpenSet((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    } else {
      setOpen((cur) => (cur === id ? null : id));
    }
  }

  function isOpen(id: string) {
    return allowMultiple ? openSet.has(id) : open === id;
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const expanded = isOpen(item.id);
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-soft"
          >
            <h2 className="text-base font-semibold leading-snug">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-brand-navy transition-colors hover:bg-brand-sand/50"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-teal transition-transform duration-200 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-brand-navy/6 px-5 py-4 text-sm leading-relaxed text-brand-navy/70">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
