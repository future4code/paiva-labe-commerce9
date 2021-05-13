import React from 'react';
import styled from 'styled-components';
import {Filtro} from './components/Filtro';


class App extends React.Component {
state = {
valueMax : 2000,
valueMin : 0,
buscaProduto : "Camiseta",

}
  
render() {
  return(
    <Filtro/>
    );
  }
}

export default App;
  



