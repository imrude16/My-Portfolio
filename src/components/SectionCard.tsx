import { ReactNode } from "react";

export default function SectionCard({ id, title, icon, children }: { id: string; title: string; icon: ReactNode; children: ReactNode; }) {
  return (
    <section id={id} className="bg-neutral-100 border border-neutral-200 md:border-neutral-300 rounded-2xl p-5 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="p-2 rounded-xl border border-neutral-200 md:border-neutral-300 bg-white/50">
          {icon}
        </div>
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-950">{title}</h2>
      </div>
      {children}
    </section>
  );
}
