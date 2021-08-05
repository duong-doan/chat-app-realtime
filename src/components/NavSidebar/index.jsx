import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";

const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 100px;
  img {
    width: 80px;
    height: 80px;
  }
`;

export default function NavSidebar({ name, photoUrl }) {
  return (
    <NavbarStyled>
      <Avatar alt="image" src={photoUrl} />
      {name && <h4>{name}</h4>}
    </NavbarStyled>
  );
}

NavSidebar.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
};

NavSidebar.defaultProps = {};
