import { API } from './api';

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const api = new API(DOMAIN);

export const getUrlWithSearchParams = (url, params = {}) => {
  const urlSearch = new URLSearchParams();

  Object.keys(params).forEach(key => {
    urlSearch.append(key, params[key]);
  });

  return `${url}?${urlSearch.toString()}`;
};
