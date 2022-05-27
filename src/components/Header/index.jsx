import React from "react";

import { NavLink } from "react-router-dom";
import { StyledDiv, Title, Navbar } from "./components";
import { APP_NAME } from "@/constants/names";
import {
  HOME_PAGE_NAME, HOME_PAGE_ROUTE, SETTINGS_PAGE_NAME, SETTINGS_PAGE_ROUTE,
} from "@/constants";

export default function () {
  const setActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return ({
        borderBottom: "2px solid white",
      });
    }
  };

  return (
    <StyledDiv>
      <Title>
        {APP_NAME}
      </Title>
      <Navbar>
        <NavLink
          to={HOME_PAGE_ROUTE}
          style={setActiveLinkStyle}
          id="link"
        >
          {HOME_PAGE_NAME}
        </NavLink>
        <NavLink
          to={SETTINGS_PAGE_ROUTE}
          style={setActiveLinkStyle}
          id="link"
        >
          {SETTINGS_PAGE_NAME}
        </NavLink>
      </Navbar>
    </StyledDiv>
  );
}
