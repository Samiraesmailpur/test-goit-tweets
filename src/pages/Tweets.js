import { CardsList } from "../components/CardsList/CardsLIst";
import { useEffect, useState } from "react";
import fetchUsers from "../services/fetchUsers";
import { LoadMore } from "../components/LoadMore/LoadMore";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetchUsers(page, 3);
        // setUsers((prevUsers) => [...prevUsers, ...response]);
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, [page]);

  if (!users) {
    return null;
  }

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {users.length > 0 && <CardsList users={users} />}
      <LoadMore handleClick={incrementPage} />
    </>
  );
};

export default Tweets;
