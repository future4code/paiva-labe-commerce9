import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  border: 1px solid gray;
  padding: 8px;
  gap: 6px;
`
const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1vh;
`
export class Filter extends React.Component {
    render () {
        return <FilterContainer>
            <h3>Filtros</h3>
            <InputContainer>
                    Valor mínimo:
                    <input 
                        type='number'
                        value={this.props.minFilter}
                        onChange={this.props.OnChangeMinFilter}
                    />
            </InputContainer>
            <InputContainer>
                    Valor máximo:
                    <input 
                        type='number'
                        value={this.props.maxFilter}
                        onChange={this.props.OnChangeMaxFilter}
                    />
            </InputContainer>
            <dInputContainer>
                    Buscar:<br/>
                    <input 
                        type='text'
                        value={this.props.nameFilter}
                        onChange={this.props.OnChangeNameFilter}
                    />
            </dInputContainer>
        </FilterContainer>
    }
}