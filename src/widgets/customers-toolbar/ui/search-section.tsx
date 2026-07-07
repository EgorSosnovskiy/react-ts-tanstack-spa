import { Search } from 'lucide-react';

import { Input } from '@/shared/ui/input';

interface SearchSectionProps {
  value: string;

  onChange(value: string): void;
}

export function SearchSection({ value, onChange }: SearchSectionProps) {
  return (
    <div className="flex items-center justify-center 2xl:justify-start">
      <div className="relative w-80 2xl:w-60">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <Input
          id="search"
          value={value}
          placeholder="Search"
          className="h-10 rounded-none border-2 border-slate-300 bg-white pr-3 pl-9 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:ring-0"
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}
