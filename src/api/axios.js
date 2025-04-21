import axios from 'axios';

const getApi = (username, password) => {
  return axios.create({
    baseURL: 'http://localhost:8080/api',
    auth: {
      username,
      password
    }
  });
};

export default getApi;
