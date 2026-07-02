interface PaginationInfoProps {
  from: number;
  to: number;
  total: number;
}

export function PaginationInfo({ from, to, total }: PaginationInfoProps) {
  return (
    <p className="text-[13px] leading-none text-[#888]">
      Showing <span>{from}</span> to <span>{to}</span> of <span>{total}</span>{' '}
      entries
    </p>
  );
}
