'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-8 text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error al cargar la información</h2>
      <button
        onClick={() => reset()}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Reintentar
      </button>
    </div>
  );
}