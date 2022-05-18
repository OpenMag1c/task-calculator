import styled from 'styled-components'

export const ScrollDiv = styled.div`
  margin-left: 10px;
  flex: 1;
  height: 100%;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  overflow-y: scroll;

  ${({theme}) => theme.below.xs`
    min-width: 20rem;
    margin-left: 0;
    height: 40%;
    flex: 1;
  `};
`

export const Title = styled.h4`
  width: 100%;
  padding: 0.5rem;
  color: ${({theme}) => theme.colors.black};
  text-align: center;
`

export const NoteButton = styled.button`
  width: 100%;
  min-height: 3rem;
  outline: none;
  color: ${({theme}) => theme.colors.black};
  border: none;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  background-color: transparent;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0.3rem ${({theme}) => theme.colors.black};
  }
`
