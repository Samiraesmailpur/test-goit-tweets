import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  max-width: 340px;
  height: 420px;
  margin: 0 auto 15px auto;
  padding-bottom: 36px;
  position: relative;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 380px;
    height: 460px;
    margin: 0;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: #ebd8ff;
  border-radius: 8px;
  margin-bottom: 10px;
  color: rgb(127 32 224);
  font-family: "Montserrat";
`;
