export function ProductSkeleton() {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-[var(--shadow-soft)]">
      <div className="aspect-square w-full rounded-2xl skeleton-shimmer" />
      <div className="mt-4 h-4 w-3/4 rounded-lg skeleton-shimmer" />
      <div className="mt-2 h-3 w-1/2 rounded-lg skeleton-shimmer" />
      <div className="mt-4 h-5 w-1/3 rounded-lg skeleton-shimmer" />
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="min-w-[140px] rounded-[20px] bg-white p-6 shadow-[var(--shadow-soft)] sm:min-w-[160px]">
      <div className="mx-auto h-20 w-20 rounded-full skeleton-shimmer" />
      <div className="mx-auto mt-4 h-4 w-20 rounded-lg skeleton-shimmer" />
      <div className="mx-auto mt-2 h-3 w-16 rounded-lg skeleton-shimmer" />
    </div>
  );
}

export default function LoadingSkeleton({ type = "product", count = 4 }) {
  const Skeleton = type === "category" ? CategorySkeleton : ProductSkeleton;

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </>
  );
}
