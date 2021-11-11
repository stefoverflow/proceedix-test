import httpClient from "api/httpClient";

const getUsers = () => {
  return httpClient.get(`users`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
};
