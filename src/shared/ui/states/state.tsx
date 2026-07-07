import type { ReactNode } from 'react';

interface StateProps {
  icon: ReactNode;
  title: string;
  message?: string;
  action?: ReactNode;
}

export function State({ icon, title, message, action }: StateProps) {
  return (
    <div className="flex min-h-105 flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
        {icon}
      </div>

      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

      {message && (
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          {message}
        </p>
      )}

      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}
