import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  @media screen and(max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

export const Item = styled.li`
  width: 340px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  @media screen and(min-width: 768px) {
    width: 380px;
  }
`;
