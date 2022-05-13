import React from 'react'

import { StyledDiv, Title, Navbar } from './components'
import {APP_NAME} from "@/constants/names"
import {NavLink} from "react-router-dom"
import {HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from "@/constants"

export default () => {
  return (
    <StyledDiv>
      <Title>
        {APP_NAME}
      </Title>
      <Navbar>
        <NavLink to={HOME_PAGE_ROUTE} id="link">Home</NavLink>
        <NavLink to={SETTINGS_PAGE_ROUTE} id="link">Settings</NavLink>
      </Navbar>
    </StyledDiv>
  )
}
