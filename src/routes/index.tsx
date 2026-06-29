import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

import { getProducts } from '../shared/api/products';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { data, isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data?.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}

      <Button>Click me</Button>
    </div>
  );
}
