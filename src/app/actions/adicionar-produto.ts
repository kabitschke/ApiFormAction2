"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Produto } from "@/app/products/page";



export default async function adicionarProduto(formData: FormData) {
  console.log(formData);
  

  const produto: Produto = {
    nome: formData.get('nome') as string,
    preco: Number(formData.get('preco')),
    descricao: formData.get('descricao') as string,
    estoque: Number(formData.get('estoque')),
    importado: formData.get('importado') ? 1 : 0,
  };

  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(produto),

  });

  console.log(response.ok);
  await response.json();
  revalidatePath('/products');
  redirect('/products');

}