import { Link } from '@tanstack/react-router';

import { Button } from '@/shared/ui/button';

export function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-primary text-8xl leading-none font-bold">404</h1>

      <h2 className="mt-6 text-2xl font-semibold text-slate-800">
        Page not found
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        The page you are looking for doesn't exist or may have been moved.
      </p>

      <Button asChild className="mt-8 h-10 rounded-sm px-8">
        <Link to="/customers">Back to Customers</Link>
      </Button>
    </main>
  );
}
