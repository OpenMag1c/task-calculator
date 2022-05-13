import styled from 'styled-components'

export const StyledInput = styled.span`
  min-height: 50px;
  height: 10%;
  width: 100%;
  color: ${({theme}) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  background-color: transparent;
  text-align: right;
  outline: none;
  border: none;
`
