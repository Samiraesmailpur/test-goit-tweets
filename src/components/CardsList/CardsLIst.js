import { Card } from "../Card/Card";
import { List, Item } from "./CardList.styled";
import { useLocation, Link } from "react-router-dom";

export const CardsList = ({ users }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <div>
      <Link to={backLinkHref}>
        {/* <BsArrowLeftCircleFill style={{ marginRight: "5px" }} /> */}
        Go back
      </Link>
      <List>
        {users.map((user) => (
          <Item key={user.id}>
            <Card user={user} />
          </Item>
        ))}
      </List>
    </div>
  );
};
