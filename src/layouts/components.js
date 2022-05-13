import styled from 'styled-components'
import {StyledFlex} from "@/containers/Flex/components"

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1280px;

  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
`

export const MainWindow = styled(StyledFlex)`
  height: 92%;
  width: 100%;

  background-color: ${({theme}) => theme.colors.white};
`
