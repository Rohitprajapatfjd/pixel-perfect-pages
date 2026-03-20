const Loader = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="h-56 animate-pulse rounded-2xl bg-muted" />
    ))}
  </div>
);

export default Loader;
