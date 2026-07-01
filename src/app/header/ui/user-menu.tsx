import { ChevronDown, User } from 'lucide-react';

export function UserMenu() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm text-slate-700"
    >
      <User size={18} />

      <span>Dwayne Exum</span>

      <ChevronDown size={16} />
    </button>
  );
}
