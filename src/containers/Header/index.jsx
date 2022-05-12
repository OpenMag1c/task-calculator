import React from 'react'

import { StyledDiv, Title, Navbar } from './components'
import {APP_NAME} from "@/constants/names"

export default () => {
  return (
    <StyledDiv>
      <Title>
        {APP_NAME}
      </Title>
      <Navbar>
        Home
        Settings
      </Navbar>
    </StyledDiv>
  )
}
