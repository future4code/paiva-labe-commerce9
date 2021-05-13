import React from 'react';
import styled from 'styled-components';
import {Filtro} from './components/Filtro';


class App extends React.Component {
state = {
valueMax : "",
valueMin : "",
buscaNome : "",

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



   
  
render() {
  return(
    <Filtro/>
    );
  }
}

export default App;
  



