const SkeletonLoader = () => (
  <div className="space-y-6">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="h-28 animate-pulse rounded-2xl border bg-card" />
      ))}
    </div>

    <div className="space-y-3 rounded-2xl border bg-card p-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="h-14 animate-pulse rounded-xl bg-muted/60" />
      ))}
    </div>
  </div>
);

export default SkeletonLoader;
