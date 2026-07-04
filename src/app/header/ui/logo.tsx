import { Link } from '@tanstack/react-router';

export function Logo() {
  return (
    <Link
      to="/customers"
      className="text-[18px] font-semibold tracking-[0.42em] text-[#21427A] uppercase transition-opacity select-none hover:opacity-80"
    >
      ANTIFRAUD
    </Link>
  );
}
