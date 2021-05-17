import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background:black;
  color:white;
  
  color: white
`;



const ImagemCard = styled.img`
height : 200px;
border-radius: 6px;
margin:8px

`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  border-radius: 4px;
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <ImagemCard src={product.photo}/>
      <CardInfo>
        <p><b>{product.name}</b></p>
        <p>R${product.price},00</p>
        <AddToCartButton img=" " onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho 
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}