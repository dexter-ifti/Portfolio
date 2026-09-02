"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-white/10 bg-[#fafafa]/90 dark:bg-[#111010]/95 backdrop-blur transition-colors">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[640px] items-center justify-between gap-2 px-4 py-3"
      >
        <Link
          href="/"
          className="flex items-center rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] dark:focus-visible:ring-offset-[#111010]"
          aria-label="Taha home"
        >
          <Image
            src="/pfp.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <span className="ml-2.5 flex flex-col leading-tight">
            <span className="text-sm font-bold text-neutral-900 dark:text-white">Taha</span>
            <span className="text-xs text-neutral-500 dark:text-gray-400">@DexterIfti</span>
          </span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-0.5 rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.03] p-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-2 py-1 text-center text-xs font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/60 sm:px-2.5 sm:text-sm ${
                    isActive
                      ? "bg-white text-neutral-950 shadow-sm dark:bg-white dark:text-neutral-950"
                      : "text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
