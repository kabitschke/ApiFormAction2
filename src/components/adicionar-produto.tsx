'use client'

import adicionarProduto from "@/app/actions/adicionar-produto";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return <button type="submit" disabled={status.pending}>Adicionar</button>
}




export default function ADD() {

  const [state, formAction] = useFormState(adicionarProduto, {
    errors: [],
  });

  const [nome, setNome] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [estoque, setEstoque] = React.useState('');
  const [importado, setImportado] = React.useState('');



  return (
    <div>
      <h1>Adicionar Produto</h1>

      <form action={formAction}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          name="nome"
        />

        <label htmlFor="descricao">Descrição:</label>
        <input
          id="descricao"
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          name="descricao"
        />

        <label htmlFor="preco">Preço:</label>
        <input
          id="preco"
          type="text"
          value={preco}
          onChange={e => setPreco(e.target.value)}
          name="preco"
        />

        <label htmlFor="estoque">Estoque:</label>
        <input
          id="estoque"
          type="text"
          value={estoque}
          onChange={e => setEstoque(e.target.value)}
          name="estoque"
        />

        <label htmlFor="importado">Importado:</label>
        <input
          id="importado"
          type="text"
          value={importado}
          onChange={e => setImportado(e.target.value)}
          name="importado"
        />
        {
          state.errors.map((error, i) => (
            <p key={i} style={{ color: 'red' }}>{error}</p>
          ))
        }
        <Button />
      </form>

    </div>
  );
}