/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { ADDRESS, DOMAIN } from 'constants/main';

class API {
  constructor(domain, options = {}) {
    this.axios = axios.create({
      baseURL: domain,
      ...options,
    });

    const createMethod = method => {
      this[method] = this._createRequest(method);
    };

    ['get', 'post', 'patch', 'put', 'delete'].forEach(createMethod);
  }

  _createRequest(method) {
    return async function (url, body, config) {
      const response = await this.axios[method](url, body, config);
      return (response && response.data) || null;
    };
  }
}

const api = new API(DOMAIN);

export const getUrlWithSearchParams = (params = {}) => {
  const urlSearch = new URLSearchParams();
  Object.keys(params).forEach(key => {
    urlSearch.append(key, params[key]);
  });

  return () => api.get(`addrs/${ADDRESS}/full?${urlSearch.toString()}`);
};
