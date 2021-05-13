import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 25%;
  border: solid gray 1px;
  text-align: center;

  img {
    width: 140px;
    height: 140px;
  }
`;
function Produtos(props) {
  return (
    <ProductCard>
      <img src={props.imagem} />
      <h6>{props.nome}</h6>
      <h6>{props.valor}</h6>
      <button>Comprar</button>
    </ProductCard>
  );
}

export default Produtos;

