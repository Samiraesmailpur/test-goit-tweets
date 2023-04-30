import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Nav, Link, Header } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header ref={null}>
        <Nav>
          <Link
            style={{
              marginRight: "15px",
            }}
            to="/"
            end
          >
            Home
          </Link>
          <Link to="/tweets">
            <div>Tweets</div>
          </Link>
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
