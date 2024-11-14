'use client'

import adicionarProduto from "@/app/actions/adicionar-produto";
import { Produto } from "@/app/products/actions";
import React from "react";

export default function ADD() {

  const [nome, setNome] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [estoque, setEstoque] = React.useState('');
  const [importado, setImportado] = React.useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Cria o objeto do produto com os valores convertidos
    const novoProduto: Produto = {
      nome,
      descricao,
      preco: parseFloat(preco),
      estoque: parseInt(estoque),
      importado: importado === '1' ? 1 : 0,//1 significa importado 0 nacional
    };

    await adicionarProduto(novoProduto);


  }

  return (
    <div>
      <h1>Adicionar Produto</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <label htmlFor="descricao">Descrição:</label>
        <input
          id="descricao"
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <label htmlFor="preco">Preço:</label>
        <input
          id="preco"
          type="text"
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />

        <label htmlFor="estoque">Estoque:</label>
        <input
          id="estoque"
          type="text"
          value={estoque}
          onChange={e => setEstoque(e.target.value)}
        />

        <label htmlFor="importado">Importado:</label>
        <input
          id="importado"
          type="text"
          value={importado}
          onChange={e => setImportado(e.target.value)}
        />

        <button type='submit'>Adicionar</button>
      </form>

    </div>
  );
}