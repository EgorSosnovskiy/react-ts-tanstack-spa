import { Pie, PieChart } from 'recharts';

import { Card, CardContent } from '@/shared/ui/card';
import { type ChartConfig, ChartContainer } from '@/shared/ui/chart';

interface ApprovedCardProps {
  approved: number;
  rejected: number;
}

const chartConfig = {
  approved: {
    label: 'Approved',
    color: '#39D000',
  },
  rejected: {
    label: 'Rejected',
    color: '#FF5A5A',
  },
} satisfies ChartConfig;

export function ApprovedCard({ approved, rejected }: ApprovedCardProps) {
  const chartData = [
    {
      name: 'Approved',
      value: approved,
      fill: '#39D000',
    },
    {
      name: 'Rejected',
      value: rejected,
      fill: '#FF5A5A',
    },
  ];
  return (
    <Card>
      <CardContent className="flex flex-col items-center">
        <div className="relative h-36 w-36">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                innerRadius={48}
                outerRadius={60}
                strokeWidth={0}
              ></Pie>
            </PieChart>
          </ChartContainer>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-medium">
              {approved.toLocaleString('en-US').replace(/,/g, ' ')}
            </span>
          </div>
        </div>

        <p className="mt-2 text-center text-sm">Approved Transactions</p>
      </CardContent>
    </Card>
  );
}
