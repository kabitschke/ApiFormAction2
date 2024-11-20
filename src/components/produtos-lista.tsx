export type Produto = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
}

export default async function ProdutosLista() {

  let produtos: Produto[] = []
  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      next: {
        revalidate: 5,
      },
    });

    if (!response.ok) throw new Error('Erro ao carregar os produtos.');
    produtos = await response.json() as Produto[];
  } catch (err) {
    return <p>Ocorreu um erro nessa lista de produtos.</p>

  }
  return (
    <div>
      <h1>Lista de Produtos </h1>
      {
        produtos.map((produto) =>
          <ul key={produto.id} className="produto">
            <li>Nome: {produto.nome}</li>
            <li>Descrição: {produto.descricao}</li>
            <li>Preço: {produto.preco}</li>
            <li>Quantidade: {produto.estoque}</li>
            <li>Importado: {produto.importado ? 'Importado' : 'Nacional'}</li>

          </ul>

        )
      }


    </div>
  );

}