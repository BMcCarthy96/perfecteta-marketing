import { Home, ClipboardCheck, Palmtree, CalendarCheck } from "lucide-react";

const items = [
  {
    icon: Home,
    label: "Online from home",
    sub: "Attend the showcase on your schedule",
  },
  {
    icon: ClipboardCheck,
    label: "Simple qualification",
    sub: "Clear criteria, no surprises",
  },
  {
    icon: Palmtree,
    label: "Promotional travel opportunities",
    sub: "Cruises, resorts & more for eligible guests",
  },
  {
    icon: CalendarCheck,
    label: "Easy webinar booking",
    sub: "We help you find a time that works",
  },
];

export function TrustStrip() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-sm"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{label}</p>
            <p className="mt-0.5 text-xs text-white/75">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
