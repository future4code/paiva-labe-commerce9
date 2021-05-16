import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: Math.random(),
    name: 'Planetas',
    price: 55,
    photo: 'https://cdn.shopify.com/s/files/1/0740/8743/products/SpaceTeeFront_1477x.jpg?v=1608292236'
  },
  {
    id: Math.random(),
    name: 'Drink da Lua',
    price: 55,
    photo: 'https://cdn11.bigcommerce.com/s-1ddqe/images/stencil/original/products/1718/5459/kicking-back-space-t-shirt__07106.1506777584.jpg?c=2'
  },
  {
    id: Math.random(),
    name: 'Galáxias',
    price: 30,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71B9ehq6SSL._AC_UX385_.jpg'
  },
  {
    id: Math.random(),
    name: 'Space Force',
    price: 45,
    photo: 'https://images.lookhuman.com/render/standard/mAlEGceyk3JkANJFpG7ktelWbNfytKgf/3300-mint-xl-t-space-force-like-the-air-force-but-in-space.jpg'
  }
]

class App extends React.Component {
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: '',
    productsInCart: [
      
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;
