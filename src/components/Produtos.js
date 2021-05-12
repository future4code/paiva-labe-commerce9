import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: solid gray 1px;
  text-align: center;

img {
    width: 180px;
    height:180px;
}
`
function Produtos(props){
    return (
        <ProductCard>
            <img src={props.imagem}/>
            <h6>{props.nome}</h6>
            <h6>{props.valor}</h6>
            <button>Comprar</button>            
        </ProductCard>
    )
}

export default Produtos;