// import React from 'react';
import API from '../../utils/api';

const getAccount = () => {
  return API.get('/accounts')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
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

export { getAccount, postAccount, postManageAccount };
