import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default async function Home() {
  // Consulta de categorías desde Supabase (Server Component)
  const { data: categorias, error } = await supabase
    .from('categorias')
    .select('*');

  return (
    <main className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Catálogo Tecnológico</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explora nuestros productos seleccionando una categoría:
      </p>

      {error ? (
        <p className="text-red-500">Error {error.message}</p>
      ) : (
        <div className="flex justify-center gap-4 flex-wrap">
          {categorias?.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Ver {cat.nombre}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}