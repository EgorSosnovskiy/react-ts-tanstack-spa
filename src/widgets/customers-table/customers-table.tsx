import type { Customer } from '@/entities/customer';
import { cn } from '@/shared/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';

import { CustomersTableHead } from './table-head';

interface CustomersTableProps {
  customers: Customer[];
  selectedCustomerId: string | null;
  onSelectCustomer(customerId: string | null): void;
}

type Column = {
  key: keyof Customer;
  header: string;
  emptyValue?: string;
  className?: string;
  align?: 'left' | 'right';
  format?: (value: number) => string;
};

const columns: readonly Column[] = [
  {
    key: 'customerNumber',
    header: 'CID',
  },
  {
    key: 'fullName',
    header: 'Full Name',
  },
  {
    key: 'city',
    header: 'City',
  },
  {
    key: 'state',
    header: 'State',
  },
  {
    key: 'address',
    header: 'Address',
    className: 'max-w-55 truncate',
  },
  {
    key: 'phone',
    header: 'Phone Number',
    className: 'w-41.25 whitespace-nowrap',
  },
  {
    key: 'balance',
    header: 'Acc Balance',
    emptyValue: 'No Account',
    className: 'w-42.5 text-right',
    format: (value: number) =>
      value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
  },
] as const;

export function CustomersTable({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}: CustomersTableProps) {
  return (
    <section className="overflow-hidden bg-white pr-2 pl-2">
      <Table className="border-b border-gray-400">
        {/* HEADER */}
        <TableHeader>
          <TableRow className="h-11 bg-white">
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={cn(
                  'bg-white px-4 text-[12px] font-normal text-[#555555]',
                  col.className,
                )}
              >
                <CustomersTableHead
                  title={col.header}
                  align={col.key === 'balance' ? 'right' : 'left'}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* BODY */}
        <TableBody>
          {customers.map((customer) => (
            <TableRow
              key={customer.id}
              onClick={() =>
                onSelectCustomer(
                  selectedCustomerId === customer.id ? null : customer.id,
                )
              }
              className={cn(
                'h-9.5 cursor-pointer transition-colors',
                selectedCustomerId === customer.id
                  ? 'bg-blue-200'
                  : 'odd:bg-gray-100 even:bg-white hover:outline hover:outline-[#2F80ED]',
              )}
            >
              {columns.map((col) => {
                const value = customer[col.key];

                const displayValue =
                  col.format && typeof value === 'number'
                    ? col.format(value)
                    : String(value ?? col.emptyValue);

                return (
                  <TableCell
                    key={col.key}
                    className={cn(
                      'px-4 py-0 text-[13px] text-[#2D2D2D]',
                      col.className,
                    )}
                  >
                    {displayValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
