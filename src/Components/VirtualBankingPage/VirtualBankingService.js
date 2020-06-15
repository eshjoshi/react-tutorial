import API from '../../utils/api';

const getAccount = () => {
  return API.get('/accounts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const getUsers = () => {
  return API.get('/users', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const postAccount = (account) => {
  return API.post('/accounts', account)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const postManageAccount = (accountData, operation) => {
  return API.post(`/accounts/${operation}`, accountData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const postLogin = (loginData) => {
  return API.post(`/login`, loginData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error);
    });
};
const postRegister = (registerData) => {
  return API.post(`/users`, registerData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error);
    });
};
export { getAccount, postAccount, postManageAccount, postLogin, postRegister, getUsers };
