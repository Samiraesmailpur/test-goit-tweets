import { CardsList } from "../components/CardsList/CardsLIst";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/fetchUsers";
import { LoadMore } from "../components/LoadMore/LoadMore";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  const limit = 3;

  useEffect(() => {
    // let isCanceled = false;
    async function getUsers() {
      const { users, totalCount } = await fetchUsers(page, limit);

      // if (!isCanceled) {
      setTotalCount(totalCount);
      setUsers((prevUsers) => [...prevUsers, ...users]);
      // }
    }

    getUsers();

    // return () => {
    //   isCanceled = true;
    // };
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
      {page < totalCount / limit && <LoadMore handleClick={incrementPage} />}
    </>
  );
};

export default Tweets;
