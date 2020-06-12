import API from '../../utils/api';
import AlertShow from './AlertShow';

const getAccount = () => {
  return API.get('/accounts')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const postAccount = (account) => {
  return API.post('/accounts', JSON.stringify(account))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const postManageAccount = (accountData, operation) => {
  return API.post(`/accounts/${operation}`, JSON.stringify(accountData))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const postLogin = (loginData) => {
  return API.post(`/login`, JSON.stringify(loginData))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error);
    });
};
const postRegister = (registerData) => {
  return API.post(`/register`, JSON.stringify(registerData))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error);
    });
};
export { getAccount, postAccount, postManageAccount, postLogin, postRegister };
