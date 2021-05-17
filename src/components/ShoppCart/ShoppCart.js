import React from "react";
import {ShoppCartItem} from './ShoppCartItem';
import styled from "styled-components";

const ShoppCartContainer = styled.div`
  border: 1px solid orange;
  padding: 6px;
`
const CartListContainer = styled.div`
    display: grid;
    gap: 4px;
`

export class ShoppCart extends React.Component {
    getTotalValue = () => {
        let totalValue = 0
        for(let product of this.props.productsInCart) {
            totalValue += product.price * product.quantity
        }
        return totalValue
    }
    render() {
        return <ShoppCartContainer>
            <h3>Carrinho:</h3>
            <CartListContainer>
                {this.props.productsInCart.map((product) => {
                    return <ShoppCartItem 
                        cartItem={product} 
                        onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                    />
                })}
            </CartListContainer>
            <p>Total:R${this.getTotalValue()},00</p>  
        </ShoppCartContainer>
    }
}