import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 70%;
  border: none;
  border-bottom: 1px solid #555555;
  outline: none;
  font-size: 1rem;
  padding: 7px 12px;
`

const StyledButton = styled.button`
    height: 30px;
    border: 1px solid #555;
    padding: 8px 12px;
`

export default function Form(props) {
  return (
    <div>
      <StyledForm onSubmit={(e) => props.handleSubmit(e)}>
        <StyledInput type="text" placeholder="Add a task" onChange={(e) => props.handleChange(e)} value={props.input} />
        <StyledButton onSubmit={(e) => props.handleSubmit(e)}>Submit</StyledButton>
      </StyledForm>
      <StyledButton onClick={(e) => props.handleClear(e)}>Clear Completed</StyledButton>
    </div>
  )
}
