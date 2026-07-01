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
      <SelectTrigger className="h-9 w-42.5 rounded-sm">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {pageSizes.map((size) => (
          <SelectItem key={size} value={String(size)}>
            {size} entries per page
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
