import { ChevronDown, User } from 'lucide-react';

export function UserMenu() {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 text-[14px] font-normal text-slate-700 transition-colors hover:text-[#2F80ED]"
    >
      <User size={14} strokeWidth={2} />

      <span className="leading-none">Dwayne Exum</span>

      <ChevronDown size={14} strokeWidth={2} />
    </button>
  );
}
