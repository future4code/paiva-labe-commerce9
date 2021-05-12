import React from "react";
import styled from "styled-components";
import Produtos from "./components/Produtos";

const AppContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 6px;
`
class App extends React.Component {
  state = {
    arrayProducts: [
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
    ]
  }
  render() {
    return (
      <AppContainer>
        {this.state.arrayProducts.map((produto) => {
          return <Produtos
            key={produto.id}
            nome={produto.name}
            valor={produto.value}
            imagem={produto.imageUrl}
          />
        })}
      </AppContainer>
    );
  }
}
export default App;
