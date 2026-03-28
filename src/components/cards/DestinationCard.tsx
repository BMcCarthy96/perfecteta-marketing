"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type DestinationCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function DestinationCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: DestinationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-brand-navy/8 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"
          aria-hidden
        />
        <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <p className="p-5 text-sm leading-relaxed text-brand-navy/65">
        {description}
      </p>
    </motion.article>
  );
}
