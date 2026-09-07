export default function Loading() {
  return (
    <div className="p-8 max-w-3xl mx-auto animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
      <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-24 bg-gray-200 rounded w-full"></div>
    </div>
  );
}