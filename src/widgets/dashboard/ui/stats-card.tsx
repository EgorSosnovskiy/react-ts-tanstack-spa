import type { LucideIcon } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';

interface StatsCardProps {
  icon: LucideIcon;

  iconColor: string;

  value: string | number;

  label: string;

  actionLabel?: string;

  className?: string;
}

export function StatsCard({
  icon: Icon,
  iconColor,
  value,
  label,
  actionLabel,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn('h-42', className)}>
      <CardContent className="flex h-full flex-col justify-center pl-20">
        <Icon size={36} strokeWidth={2} style={{ color: iconColor }} />

        <div className="mt-4 mb-3 text-4xl font-normal tracking-tight">
          {value}
        </div>

        <p className="text-sm">{label}</p>

        {actionLabel && (
          <Button variant="outline" className="mt-4 h-8 w-32 text-xs">
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
