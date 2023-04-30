import axios from "axios";

const BASE_URL = "https://644a5c3da8370fb3214c28e7.mockapi.io/api/users";

async function fetchUsers(page, limit) {
  const response = await axios.get(BASE_URL, {
    params: {
      page: page,
      limit: limit,
    },
  });
  const totalCount = await axios.get(BASE_URL);
  const users = response.data;
  return { totalCount: totalCount.data.length, users };
}

export { fetchUsers };
