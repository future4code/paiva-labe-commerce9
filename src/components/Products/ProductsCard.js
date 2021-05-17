import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`
const CardInfo = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 16px;

    p {
        margin: 4px 0;
    }
`
const AddToCartButton = styled.div`
    align-self: center;
    margin-top: 8px;
`

export class ProductsCard extends React.Component {
    render () {
        const product = this.props.product
        return <CardContainer>
            <img src={product.photo}/>
            <CardInfo>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
                    Adicionar
                </AddToCartButton>
            </CardInfo>
        </CardContainer>
    }
}