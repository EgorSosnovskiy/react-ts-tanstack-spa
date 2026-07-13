import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

interface PaginationSizeSelectProps {
  value: number;
  onValueChange: (value: number) => void;
}

export function PaginationSizeSelect({
  value,
  onValueChange,
}: PaginationSizeSelectProps) {
  const pageSizes = [10, 25, 50];

  return (
    <Select
      value={String(value)}
      onValueChange={(value) => onValueChange(Number(value))}
    >
      <SelectTrigger
        className="h-8 w-14 cursor-pointer rounded-none border-0 bg-gray-100 text-[13px] shadow-none focus:ring-0 lg:w-41.25 lg:px-3"
        aria-label="Select page size"
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent className="rounded-none">
        {pageSizes.map((size) => (
          <SelectItem key={size} value={String(size)} className="text-[13px]">
            {size} entries per page
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
