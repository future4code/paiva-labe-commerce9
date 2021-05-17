import React from "react";
import {Filter} from './components/Filter/Filter';
import {Products} from './components/Products/Products';
import {ShoppCart} from './components/ShoppCart/ShoppCart';
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 6px;
  width: 100vw;
  height: 100vh;

  img {
    width: 180px;
    height: 180px;
  }
`
const products = [
  {
    id: 1,
    name: 'Planetas',
    price: 55,
    photo: 'https://cdn.shopify.com/s/files/1/0740/8743/products/SpaceTeeFront_1477x.jpg?v=1608292236'
  },
  {
    id: 2,
    name: 'Drink da Lua',
    price: 55,
    photo: 'https://cdn11.bigcommerce.com/s-1ddqe/images/stencil/original/products/1718/5459/kicking-back-space-t-shirt__07106.1506777584.jpg?c=2'
  },
  {
    id: 3,
    name: 'Galáxias',
    price: 30,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71B9ehq6SSL._AC_UX385_.jpg'
  },
  {
    id: 4,
    name: 'Space Force',
    price: 45,
    photo: 'https://images.lookhuman.com/render/standard/mAlEGceyk3JkANJFpG7ktelWbNfytKgf/3300-mint-xl-t-space-force-like-the-air-force-but-in-space.jpg'
  },
  {
    id: 5,
    name: 'E.T.',
    price: 65,
    photo: 'https://m.media-amazon.com/images/I/B1qmQK-r4OS._CLa%7C2140%2C2000%7C81ibgeg6MjL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png'
  },
  {
  id: 6,
  name: 'Stars',
  price: 85,
  photo: 'https://i.pinimg.com/originals/e7/e5/7a/e7e57a4210b74d10f5aae20c9cfc9c5d.jpg'
  }
  
]

class App extends React.Component {
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: [
        {
          id: 6,
          name: 'Stars',
          price: 85,
          photo: 'https://i.pinimg.com/originals/e7/e5/7a/e7e57a4210b74d10f5aae20c9cfc9c5d.jpg',
          quantity: 8
        },
        {
          id: 3,
          name: 'Galáxias',
          price: 30,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/71B9ehq6SSL._AC_UX385_.jpg',
          quantity: 3
        }  
    ],
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter:event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter:event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter:event.target.value})
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
      this.setState({productsInCart:newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)
      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]
      this.setState({productsInCart:newProductsInCart})


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
        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}        
        />
      </AppContainer>
    );
  }
}
   
export default App;
  



