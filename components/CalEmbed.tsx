"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { FiCalendar, FiClock, FiChevronDown } from "react-icons/fi";

interface CalEmbedProps {
  calLink?: string;
  title?: string;
  description?: string;
}

export default function CalEmbed({
  calLink = process.env.NEXT_PUBLIC_CAL_LINK || "dexter-ifti",
  title = "Schedule a chat",
  description = "Book an intro call to discuss backend architecture, AI workflows, or potential collaborations.",
}: CalEmbedProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Listen for hash change to automatically expand when user clicks "Schedule chat" in Hero
    const handleHashChange = () => {
      if (window.location.hash === "#schedule") {
        setIsOpen(true);
      }
    };

    if (window.location.hash === "#schedule") {
      setIsOpen(true);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          styles: {
            branding: { brandColor: "#ffffff" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Cal API load error:", err);
      }
    })();
  }, [isOpen]);

  return (
    <section className="mt-10 border-t border-white/10 pt-8" id="schedule">
      <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4 transition-all duration-200 hover:border-white/20 sm:p-5">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-lg"
          aria-expanded={isOpen}
          aria-controls="cal-embed-content"
        >
          <div className="flex items-start gap-3.5 min-w-0 pr-2">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-gray-200">
              <FiCalendar aria-hidden="true" className="h-4 w-4" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                  {title}
                </h2>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  Cal.com
                </span>
              </div>
              <p className="mt-1.5 text-pretty text-sm leading-6 text-gray-400 max-w-[55ch]">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-block text-xs font-medium text-gray-400">
              {isOpen ? "Collapse" : "Open calendar"}
            </span>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-gray-300 transition-transform duration-200 ${
                isOpen ? "rotate-180 text-white" : ""
              }`}
            >
              <FiChevronDown className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </button>

        {isOpen && (
          <div
            id="cal-embed-content"
            className="mt-6 border-t border-white/10 pt-5 animate-in fade-in duration-200"
          >
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#141414] p-1 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <FiClock className="h-3.5 w-3.5 text-emerald-400" />
                  cal.com/{calLink}
                </span>
                <span className="text-[11px] text-neutral-500">Auto-timezone detected</span>
              </div>
              <div className="w-full min-h-[520px]">
                <Cal
                  calLink={calLink}
                  style={{ width: "100%", height: "100%", minHeight: "520px", overflow: "scroll" }}
                  config={{ layout: "month_view", theme: "dark" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
