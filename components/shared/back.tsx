"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

interface BackButtonProps {
  fallbackUrl?: string;
  label?: string;
}

export default function BackButton({ fallbackUrl = "/", label = "Back" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackUrl);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex flex-row items-center justify-start gap-2.5 rounded-md border border-neutral-200 bg-neutral-100 px-3 py-2 text-sm text-neutral-800 outline-none transition duration-300 ease-in-out hover:bg-neutral-200 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus-visible:ring-white/60"
      title={label}
      aria-label={label}
    >
      <BiArrowBack className="h-4 w-4" />
      <span className="text-xs text-neutral-700 dark:text-neutral-200">
        {label}
      </span>
    </button>
  );
}
