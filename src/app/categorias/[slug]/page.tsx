import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;

  // 1. Buscar la categoría por slug
  const { data: categoria } = await supabase
    .from('categorias')
    .select('id, nombre')
    .eq('slug', slug)
    .single();

  if (!categoria) notFound();

  // 2. Buscar productos de esa categoría
  const { data: productos } = await supabase
    .from('productos')
    .select('*')
    .eq('categoria_id', categoria.id);

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold mb-6">Categoría: {categoria.nombre}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos?.map((prod) => (
          <div key={prod.id} className="border p-4 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{prod.titulo}</h2>
              <p className="text-gray-600 font-semibold mb-4">${prod.precio}</p>
            </div>
            <Link
              href={`/productos/${prod.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition"
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}