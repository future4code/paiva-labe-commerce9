import React from "react";
import { ProductsCard } from "./ProductsCard";
import styled from "styled-components";

const ProductsContainer = styled.div`
  border: 1px solid green;
`;
const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px;
`;

export class Products extends React.Component {
    state = {
        sort: 'crescente'
    }
    
    getFilteredAndOrderedList = () => {
        return this.props.products
        .filter((product) => product.price < this.props.maxFilter)
        .filter((product) => product.price > this.props.minFilter)
        .filter((product) => product.name.includes(this.props.nameFilter))
        .sort((a,b) => this.state.sort === 'crescente' ? a.price - b.price : b.price - a.price)

    }

    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
    }


  render() {
      const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return (
      <ProductsContainer>
        <ProductsHeader>
          <p>Quantidade de produtos:{filteredAndOrderedList.length}</p>
          <label>
            Ordem:
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={'crescente'}>Crescente</option>
              <option value={'decrescente'}>Decrescente</option>
            </select>
          </label>
        </ProductsHeader>
        <ProductsGrid>
          {filteredAndOrderedList.map((product) => {
            return <ProductsCard 
                product={product} 
                onAddProductTocart={this.props.onAddProductToCart} 
            />
          })}
        </ProductsGrid>
      </ProductsContainer>
    );
  }
}
