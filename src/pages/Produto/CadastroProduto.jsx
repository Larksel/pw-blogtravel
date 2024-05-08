import React, { useState, useEffect } from 'react';

export default function CadastroProduto() {
  return (
    <div>
      <h1>Cadastrar produto</h1>

      <form>
        <label>
          <span>Nome:</span>

          <input
            type='text'
            name='displayName'
            required
            placeholder='Nome do Produto'
          />
        </label>
        <label>
          <span>Tipo:</span>

          <input
            type='text'
            name='displayTipo'
            required
            placeholder='Tipo do Produto'
          />
        </label>
        <label>
          <span>Marca:</span>

          <input
            type='text'
            name='displayMarca'
            required
            placeholder='Marca do Produto'
          />
        </label>
        <label>
          <span>Preço:</span>

          <input
            type='text'
            name='displayPreco'
            required
            placeholder='Preço do Produto'
          />
        </label>

        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  );
}
