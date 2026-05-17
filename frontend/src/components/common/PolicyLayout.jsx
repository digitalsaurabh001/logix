import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { X } from "./Placeholder";

/*
  Editorial layout for the 10 regulatory/policy pages.
  - Hero band with eyebrow + serif title + last updated
  - Two column: sticky TOC sidebar (lg+) + max-w-3xl content
  - children should contain <section id="…"> blocks
*/

export default function PolicyLayout({
  eyebrow = "Regulatory",
  title,
  intro,
  lastUpdated = <X>DD MMM 20xx</X>,
  toc = [], // [{ id, label }]
  children,
}) {
  const [active, setActive] = useState(toc[0]?.id || "");

  useEffect(() => {
    if (!toc.length) return;
    const handler = () => {
      let current = toc[0]?.id || "";
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top < 140) current = item.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [toc]);

  return (
    <main data-testid="policy-layout" className="bg-[#F9F8F6]">
      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E3DB] bg-[#F9F8F6]">
        <div className="container-x pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="flex items-center gap-2 text-xs text-[#64746C] mb-8">
            <Link to="/" className="hover:text-[#B85C38] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A2421]">{title}</span>
          </div>

          <div className="overline text-[#B85C38]">{eyebrow}</div>
          <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.02] mt-4 text-[#1A2421] max-w-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-[#1A2421]/75 text-base leading-relaxed">
              {intro}
            </p>
          )}
          <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#64746C]">
            <span className="inline-block w-6 h-px bg-[#B85C38]" />
            Last updated: <span className="text-[#1A2421] not-italic">{lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {toc?.length > 0 && (
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <div className="overline text-[#64746C] mb-4">On this page</div>
                <ul className="space-y-2 border-l border-[#E5E3DB]">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        data-testid={`toc-${t.id}`}
                        className={`block pl-4 -ml-px py-1.5 text-[13px] border-l transition-colors ${
                          active === t.id
                            ? "border-[#B85C38] text-[#B85C38]"
                            : "border-transparent text-[#1A2421]/70 hover:text-[#1A2421]"
                        }`}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          <article className={`prose-policy ${toc?.length ? "lg:col-span-9" : "lg:col-span-12"} max-w-3xl`}>
            {children}
          </article>
        </div>
      </section>
    </main>
  );
}
