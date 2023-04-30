import { Button, ButtonContainer } from "./LoadMore.styled";

export const LoadMore = ({ handleClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={handleClick}>Load more</Button>
    </ButtonContainer>
  );
};
