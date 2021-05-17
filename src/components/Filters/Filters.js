import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  background:black;
  color:white;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`
const InputSaida = styled.input`
border: none;
font-size:20px
`;

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <form>
          <input
            type="range" name="teste" min="30" max="150" step= "10"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
            oninput = "this.form.teste.value=this.value"
          />
          <InputSaida type="number" name="teste" min="30" max="150" step= "10" value={this.props.minFilter} oninput="this.form.teste.value=this.value"  ></InputSaida>
          </form>
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <form>
          <input
            type="range" name="teste" min="30" max="200" step= "10"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
            oninput = "this.form.teste.value=this.value"
          />
          <InputSaida type="number" name="teste" min="30" max="150" step= "10" value={this.props.maxFilter} oninput="this.form.teste.value=this.value"  ></InputSaida>
          </form>
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}
