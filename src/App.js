import React from "react";
import styled from "styled-components";
import Produtos from "./components/Produtos";
import {Filtro} from './components/Filtro';

const AppContainer = styled.div`
  display: flex;
  gap: 6px;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`
const ProdutosContainer = styled.div `
display: flex;
width: 60%;
`
const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  padding: 0 1vh;
  box-sizing: border-box;
  margin-bottom: 2vh;
`

class App extends React.Component {
  state = {
    
      valueMax : "",
      valueMin : "",
      buscaNome : "",
      
      
    products: [
      {
        id: Math.random(),
        name: 'planetas',
        value: 50.00,
        imageUrl: 'https://s.yimg.com/aah/computergear/you-are-here-adult-funny-space-t-shirt-27.gif',
      },
      {
        id: Math.random(),
        name: 'cerveja',
        value: 50.00,
        imageUrl: 'https://cdn11.bigcommerce.com/s-1ddqe/images/stencil/original/products/1718/5459/kicking-back-space-t-shirt__07106.1506777584.jpg?c=2',
      },
      {
        id: Math.random(),
        name: 'psicodelico',
        value: 54.00,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0740/8743/products/SpaceTeeFront_1477x.jpg?v=1608292236',
      },
      {
        id: Math.random(),
        name: 'galaxias',
        value: 66.00,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71B9ehq6SSL._AC_UX385_.jpg',
      },
      {
        id: Math.random(),
        name: 'foguete',
        value: 45.00,
        imageUrl: 'https://images.lookhuman.com/render/standard/mAlEGceyk3JkANJFpG7ktelWbNfytKgf/3300-mint-xl-t-space-force-like-the-air-force-but-in-space.jpg',
      },
      {
        id: Math.random(),
        name: 'catnauta',
        value: 50.00,
        imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--8asZT80L--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829017:production:blanks:qe3008lhp5hquxmwp4a0,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1475655011/production/designs/714464_1.jpg',
      }
    ],
    items: '',
  }
  onChangevalueMin = (event) => {
    this.setState({valueMin: event.target.value})
  }
  
  onChangevalueMax = (event) => {
    this.setState({valueMax: event.target.value})
  }
  
  onChangebuscaNome = (event) => {
    this.setState({buscaNome: event.target.value})
  }

  itemsOrdenados = (event) => {
    this.setState({items:event.target.value})
>>>>>>> master

    let newProducts = []
    switch (this.state.items) {
      case ('crescente'):
        newProducts = [...this.state.products]
        this.setState({products:newProducts.sort((a,b) => {
          return b.value - a.value})
        })
      break;

      case ('decrescente'):
        newProducts = [...this.state.products]
        this.setState({products:newProducts.sort((a,b) => {
          return a.value - b.value})
        })
        break;
    } 
  }  

  render() {
    return (
      
      <AppContainer>
        <Filtro/>
        <ProductsHeader>
        <h5>Produtos:{this.state.products.length}</h5>
        <label>
          Ordenar:
          <select onChange={this.itemsOrdenados}>
            <option value="crescente">menor preço</option>
            <option value="decrescente">maior preço</option>
          </select>
        </label>
        </ProductsHeader>
        <ProdutosContainer>
        {this.state.products.map((produto) => {
          return <Produtos
            key={produto.id}
            nome={produto.name}
            valor={produto.value}
            imagem={produto.imageUrl}
          />
        })}
        </ProdutosContainer>
      </AppContainer>
    );
  }
}
export default App;
  



