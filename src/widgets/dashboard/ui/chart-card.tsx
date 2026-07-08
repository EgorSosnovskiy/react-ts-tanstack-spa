import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/ui/chart';

const chartConfig = {
  transactions: {
    label: 'Transactions',
    color: '#2F80ED',
  },
} satisfies ChartConfig;

interface ChartCardProps {
  data: {
    month: string;
    transactions: number;
  }[];
}

export function ChartCard({ data }: ChartCardProps) {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle className="text-[15px] font-normal">
          Transactions per Month
        </CardTitle>
      </CardHeader>

      <CardContent className="min-w-0">
        <ChartContainer config={chartConfig} className="h-30 w-full">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <defs>
              <linearGradient id="fillTransactions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-transactions)"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="var(--color-transactions)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              type="natural"
              dataKey="transactions"
              stroke="var(--color-transactions)"
              fill="url(#fillTransactions)"
              fillOpacity={1}
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
