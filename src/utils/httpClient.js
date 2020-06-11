import API from './api';

export default {
  fetchAccount: () => {
    API.get('/accounts')
      .then((response) => {
        return response.json;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
