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
      className="flex flex-row items-center justify-start gap-2.5 
      text-white transition duration-300 ease-in-out
      bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-md px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-white/60 outline-none"
      title={label}
      aria-label={label}
    >
      <BiArrowBack className="h-4 w-4" />
      <span className="text-xs text-gray-300">{label}</span>
    </button>
  );
}
