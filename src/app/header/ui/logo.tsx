import { Link } from '@tanstack/react-router';

export function Logo() {
  return (
    <Link
      to="/customers"
      className="text-base font-semibold tracking-[0.3em] text-[#21427A] uppercase transition-opacity select-none hover:opacity-80 lg:text-[18px] lg:tracking-[0.42em]"
    >
      ANTIFRAUD
    </Link>
  );
}
