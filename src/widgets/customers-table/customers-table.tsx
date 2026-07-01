import type { Customer } from '@/entities/customer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';

interface CustomersTableProps {
  customers: Customer[];
}

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <section className="overflow-hidden rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="h-10">
            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              CID
            </TableHead>

            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              Full Name
            </TableHead>

            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              City
            </TableHead>

            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              State
            </TableHead>

            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              Address
            </TableHead>

            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              Phone Number
            </TableHead>

            <TableHead className="text-muted-foreground px-4 text-xs font-normal">
              Acc Balance
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id} className="h-12">
              <TableCell className="px-4 py-0">
                {customer.customerNumber}
              </TableCell>

              <TableCell className="px-4 py-0">{customer.fullName}</TableCell>

              <TableCell className="px-4 py-0">{customer.city}</TableCell>

              <TableCell className="px-4 py-0">{customer.state}</TableCell>

              <TableCell className="max-w-65 px-4 py-0">
                {customer.address}
              </TableCell>

              <TableCell className="px-4 py-0 whitespace-nowrap">
                {customer.phone}
              </TableCell>

              <TableCell className="text-right font-medium">
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
