import axios from 'axios';

export class API {
  constructor(domain, options = {}) {
    this.axios = axios.create({
      baseURL: domain,
      ...options,
    });

    const { errorResponseInterceptor } = this;

    this.axios.interceptors.response.use(
      null,
      errorResponseInterceptor.bind(this)
    );

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

  /**
   * Interceptor for whole API error responses
   *
   * @param {Object} error
   */
  errorResponseInterceptor(error) {
    return Promise.reject(error);
  }

  saveToken(token) {
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  deleteToken() {
    this.axios.defaults.headers.common['Authorization'] = '';
  }
}
