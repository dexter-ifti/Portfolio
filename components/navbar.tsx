"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111010]/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[640px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link
          href="/"
          className="flex w-fit items-center rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
          aria-label="Taha home"
        >
          <Image
            src="/pfp.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="ml-2 flex flex-col leading-tight">
            <span className="text-sm font-bold text-white">Taha</span>
            <span className="text-xs text-gray-400">@DexterIfti</span>
          </span>
        </Link>

        <div className="grid w-full grid-cols-5 gap-1 rounded-lg bg-white/[0.03] p-1 sm:w-auto">
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
                className={`rounded-md px-1.5 py-1.5 text-center text-xs font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171616] sm:px-2.5 sm:text-sm ${
                  isActive
                    ? "bg-white text-neutral-950"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
