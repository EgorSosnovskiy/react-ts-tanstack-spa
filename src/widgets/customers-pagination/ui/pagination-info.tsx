interface PaginationInfoProps {
  from: number;
  to: number;
  total: number;
}

export function PaginationInfo({ from, to, total }: PaginationInfoProps) {
  return (
    <p className="text-muted-foreground text-sm">
      Showing <span className="text-foreground font-medium">{from}</span> to{' '}
      <span className="text-foreground font-medium">{to}</span> of{' '}
      <span className="text-foreground font-medium">{total}</span> entries
    </p>
  );
}
