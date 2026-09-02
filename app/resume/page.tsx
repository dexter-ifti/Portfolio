import BackButton from "@/components/shared/back";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function Resume() {
  return (
    <main className="container mx-auto min-h-screen py-10 px-4">
      <div className="max-w-[640px] mx-auto">
        <div className="flex items-center justify-between">
          <BackButton fallbackUrl="/" />
          <div className="flex items-center gap-2">
            <a
              href="/TahaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
              Open PDF
            </a>
            <a
              href="/TahaResume.pdf"
              download="Taha_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2 text-xs font-medium text-neutral-950 transition-colors hover:bg-gray-200"
            >
              <FiDownload className="h-3.5 w-3.5" />
              Download PDF
            </a>
          </div>
        </div>
        <h1 className="my-6 text-3xl font-bold text-white tracking-[-0.02em]">Resume</h1>
        <div className="bg-neutral-900/60 border border-white/10 p-2 sm:p-4 rounded-xl shadow-xl mb-6">
          <div className="relative aspect-[8.5/11] w-full rounded-lg overflow-hidden bg-neutral-950">
            <iframe
              src="/TahaResume.pdf"
              className="w-full h-full"
              title="Taha's Resume"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
