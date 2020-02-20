import axios from 'axios';
import { ADDRESS } from 'constants/main';

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
    return async function(url, body, config) {
      const response = await this.axios[method](url, body, config);
      return (response && response.data) || null;
    };
  }
}

const DOMAIN = 'https://api.blockcypher.com/v1/btc/test3/';

const api = new API(DOMAIN);

// const TOKEN = 'c34c62a764594f8281815148ed9930fb';

export const getUrlWithSearchParams = (params = {}) => {
  const urlSearch = new URLSearchParams();
  Object.keys(params).forEach(key => {
    urlSearch.append(key, params[key]);
  });
  // api.get(`${DOMAIN}?token=${TOKEN}`);

  return () => api.get(`addrs/${ADDRESS}/full?${urlSearch.toString()}`);
};
