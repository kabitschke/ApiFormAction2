import Link from "next/link";

export default async function Menu() {

  return (
    <ul className="menu">
      <li><Link href={`/`}>Home</Link></li>
      <li><Link href={`/products`}>Listar Produto</Link></li>
      <li><Link href={`/products/add`}>Adicionar Produto</Link></li>
    </ul>
  );
}
