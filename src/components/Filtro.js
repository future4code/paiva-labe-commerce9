import React from 'react';
import styled from "styled-components"

const ContainerDoFiltro = styled.div`
border: 1px solid black;
padding:20px
`

export class Filtro extends React.Component {
 render ()
 {
    return(
     <ContainerDoFiltro>
        <h2>Filtros</h2>
         <div>
             <h3>Valor Mínimo:</h3>
             <input type= "number" value={this.props.valueMin} onChange={this.props.onChangevalueMin} />
         </div>
         <div>
             <h3>Valor Máximo:</h3>
             <input type= "number" value={this.props.valueMax} onChange={this.props.onChangevalueMax}/>
         </div>
         <div>
             <h3>Busca por Nome:</h3>
             <input type= "text" value={this.props.buscaProduto} onChange={this.props.onChangebuscaNome}/>
         </div>
         
     </ContainerDoFiltro>
    )};
 }
