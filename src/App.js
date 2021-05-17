import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const MainContainer = styled.div`



`;

const Header= styled.div`
display:flex;
border-top:0px;
height: auto;
background:black;
  color:white;
justify-content: space-between;
padding: 8px;
`;

const ImagemLogo = styled.img`
width: 90px;
height: 90px;
`;

const AppContainer = styled.div`
  height:auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  color:white;
  
`;

const products = [
  {
    id: Math.random(),
    name: 'Open Space',
    price: 55,
    photo: 'https://cdn.shopify.com/s/files/1/0740/8743/products/SpaceTeeFront_1477x.jpg?v=1608292236'
  },
  {
    id: Math.random(),
    name: 'Moon Drink',
    price: 55,
    photo: 'https://cdn11.bigcommerce.com/s-1ddqe/images/stencil/original/products/1718/5459/kicking-back-space-t-shirt__07106.1506777584.jpg?c=2'
  },
  {
    id: Math.random(),
    name: 'The Universe in me',
    price: 35,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71B9ehq6SSL._AC_UX385_.jpg'
  },
  {
    id: Math.random(),
    name: 'Space Force',
    price: 45,
    photo: 'https://images.lookhuman.com/render/standard/mAlEGceyk3JkANJFpG7ktelWbNfytKgf/3300-mint-xl-t-space-force-like-the-air-force-but-in-space.jpg'
  },
  {
    id: Math.random(),
    name: 'Catnauta',
    price: 65,
    photo: 'https://res.cloudinary.com/teepublic/image/private/s--8asZT80L--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829017:production:blanks:qe3008lhp5hquxmwp4a0,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1475655011/production/designs/714464_1.jpg',
  },
  {
    id: Math.random(),
    name: 'The Universe in a Catshell',
    price: 55,
    photo: 'https://img.elo7.com.br/product/zoom/2686AB6/camisa-gato-espacial-camiseta-gato-espacial.jpg'
  },
  {
    id: Math.random(),
    name: 'UFO',
    price: 45,
    photo: 'https://t-static.dafiti.com.br/MAehZ2rQuIr5QrxhiJSoSzbID24=/fit-in/325x471/static.dafiti.com.br/p/over-fame-camiseta-estampada-over-fame-naves-espaciais-azul-9628-2999934-1-zoom.jpg'
  },
  {
    id: Math.random(),
    name: 'Lost in Space',
    price: 45,
    photo: 'https://a-static.mlcdn.com.br/1500x1500/camiseta-baby-look-feminina-espacial-astronauta-total-print-over-fame/simbiose/ujahfj2zlp/cde9b76338300f99e061bb2163865683.jpg'
  },
  {
    id: Math.random(),
    name: 'I Believe',
    price: 45,
    photo: 'https://img.elo7.com.br/product/main/26AECF4/camiseta-i-believe-nave-espacial-aliens-alienigena-et-alien.jpg'
  },


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
     <MainContainer>
       <Header>
         
         <h1>SPACEMAN'S HOUSE</h1>
         <ImagemLogo src="https://thumbs.dreamstime.com/b/reflex%C3%A3o-do-espa%C3%A7o-em-um-capacete-dos-astronautas-estilo-tirado-m-o-projeto-das-c-pias-ilustra-vetor-149739167.jpg"/>
       </Header>
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
      </MainContainer>
    );
  }
}

export default App;
     
        
        
