import { Pie, PieChart } from 'recharts';

import type { DashboardPieItem } from '@/entities/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { type ChartConfig, ChartContainer } from '@/shared/ui/chart';

interface PieCardProps {
  data: DashboardPieItem[];
  total: number;
}

export const pieConfig = {
  deposits: {
    label: 'Deposits',
    color: '#2F80ED',
  },
  loans: {
    label: 'Loans',
    color: '#68A4E3',
  },
  withdrawals: {
    label: 'Withdrawals',
    color: '#C8DDF3',
  },
} satisfies ChartConfig;

export function PieCard({ data, total }: PieCardProps) {
  const chartData = data.map((item) => ({
    ...item,
    fill: pieConfig[item.type].color,
  }));
  return (
    <Card className="min-w-0">
      <CardHeader className="pt-10">
        <CardTitle className="text-center text-[15px] font-normal text-[#2D2D2D]">
          Processed Transactions
        </CardTitle>
      </CardHeader>

      <CardContent className="min-w-0">
        <ChartContainer
          config={pieConfig}
          className="mx-auto mt-10 aspect-square w-full max-w-55"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="type"
              stroke="none"
            />
          </PieChart>
        </ChartContainer>

        <div className="mt-8 flex flex-col pl-6">
          <p className="text-5xl font-normal tracking-tight">
            {total.toLocaleString('en-US').replace(/,/g, ' ')}
          </p>

          <div className="mt-3 space-y-1">
            {data.map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: pieConfig[item.type].color,
                  }}
                />

                <span className="text-[15px]">
                  {pieConfig[item.type].label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
