import { Card } from "../Card/Card";
import { List, Item, NavLink } from "./CardList.styled";
import { useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const CardsList = ({ users }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <div>
        <NavLink to={backLinkHref}>
          <BiArrowBack style={{ paddingLeft: "5px", marginRight: "5px" }} />
          Go back
        </NavLink>
        <List>
          {users.map((user) => (
            <Item key={user.id}>
              <Card user={user} />
            </Item>
          ))}
        </List>
      </div>
    </>
  );
};
