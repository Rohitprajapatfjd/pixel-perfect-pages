import { useProductsQuery } from '@/api/hooks/useProducts';

const ProductsQueryExample = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useProductsQuery({ page: 1, perPage: 10 });

  if (isLoading) return <p>Loading products...</p>;

  if (isError) {
    return (
      <div>
        <p>Failed to load products: {(error as { message?: string })?.message ?? 'Unknown error'}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <section>
      <h2>Products ({data?.meta.total ?? 0})</h2>
      {isFetching ? <p>Refreshing in background...</p> : null}
      <ul>
        {data?.data.map((product) => (
          <li key={product.id}>
            {product.name} — ${product.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsQueryExample;
