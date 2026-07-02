import type { Customer } from '@/entities/customer';
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
}

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <section className="overflow-hidden bg-white pr-2 pl-2">
      <Table className="border-b border-gray-400">
        <TableHeader>
          <TableRow className="h-11 bg-white">
            <TableHead className="bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="CID" />
            </TableHead>

            <TableHead className="bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="Full Name" />
            </TableHead>

            <TableHead className="bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="City" />
            </TableHead>

            <TableHead className="bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="State" />
            </TableHead>

            <TableHead className="bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="Address" />
            </TableHead>

            <TableHead className="w-41.25 bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="Phone Number" />
            </TableHead>

            <TableHead className="w-42.5 bg-white px-4 text-[12px] font-normal text-[#555555]">
              <CustomersTableHead title="Acc Balance" align="right" />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id} className="h-9.5">
              <TableCell className="px-4 py-0 text-[13px] text-[#2D2D2D]">
                {customer.customerNumber}
              </TableCell>

              <TableCell className="px-4 py-0 text-[13px] text-[#2D2D2D]">
                {customer.fullName}
              </TableCell>

              <TableCell className="px-4 py-0 text-[13px] text-[#2D2D2D]">
                {customer.city}
              </TableCell>

              <TableCell className="px-4 py-0 text-[13px] text-[#2D2D2D]">
                {customer.state}
              </TableCell>

              <TableCell className="max-w-55 truncate px-4 py-0 text-[13px] text-[#2D2D2D]">
                {customer.address}
              </TableCell>

              <TableCell className="w-41.25 px-4 py-0 text-[13px] whitespace-nowrap text-[#2D2D2D]">
                {customer.phone}
              </TableCell>

              <TableCell className="w-42.5 px-4 py-0 text-right text-[13px] font-normal text-[#2D2D2D]">
                {customer.balance.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
