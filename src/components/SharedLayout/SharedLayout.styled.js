import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  max-width: 1400px;
`;
export const Header = styled.header`
  padding: 10px;
  margin-bottom: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;
export const Link = styled(NavLink)`
  color: #373737;
  font-weight: 500;
  font-size: 30px;
  &.active {
    color: rgb(173 107 241);
  }
`;
