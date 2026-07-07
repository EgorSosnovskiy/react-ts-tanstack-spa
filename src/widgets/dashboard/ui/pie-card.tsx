import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { ChartContainer } from '@/shared/ui/chart';

import { pieConfig, pieData, totalTransactions } from '../model/pie-data';

export function PieCard() {
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
            <Pie data={pieData} dataKey="value" nameKey="type" stroke="none" />
          </PieChart>
        </ChartContainer>

        <div className="mt-8 flex flex-col pl-6">
          <p className="text-5xl font-normal tracking-tight">
            {totalTransactions.toLocaleString('en-US').replace(/,/g, ' ')}
          </p>

          <div className="mt-3 space-y-1">
            {pieData.map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />

                <span className="text-[15px] text-slate-700">
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
