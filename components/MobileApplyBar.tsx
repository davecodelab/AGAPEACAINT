import Link from "next/link";

export default function MobileApplyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t border-[#19151C]/10 bg-[#FAF8F9]/95 px-5 py-3 backdrop-blur lg:hidden">
      <Link
        href="/admissions#book-a-visit"
        className="flex-1 rounded-full border border-[#6C0798] py-3 text-center font-sans text-sm font-medium text-[#6C0798]"
      >
        Book a Visit
      </Link>
      <Link
        href="/admissions#how-to-apply"
        className="flex-1 rounded-full bg-[#E12F41] py-3 text-center font-sans text-sm font-medium text-white"
      >
        Apply Now
      </Link>
    </div>
  );
}
