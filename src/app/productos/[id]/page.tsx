import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductoPage({ params }: Props) {
  const { id } = await params;

  const { data: producto, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !producto) notFound();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>
      <h1 className="text-4xl font-bold mb-4">{producto.titulo}</h1>
      <p className="text-2xl text-green-600 font-semibold mb-4">${producto.precio}</p>
      <p className="text-gray-700 text-lg leading-relaxed">{producto.descripcion}</p>
    </main>
  );
}