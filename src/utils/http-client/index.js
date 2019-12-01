import * as Axios from 'axios';

export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export class HttpClient {
  _baseUrl

  /**
   * Create a new Http Client
   */
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
    this.addRequestInterceptors();
    this.addResponseInterceptors();
  }

  addRequestInterceptors() {
    Axios.interceptors.request.use(
        function(config) {
          config.metadata = {startTime: new Date()};
          return config;
        },
        function(error) {
          return Promise.reject(error);
        }
    );
  }
  addResponseInterceptors() {
    Axios.interceptors.response.use(
        function(response) {
          response.config.metadata.endTime = new Date();
          // calculate response duraton for every request
          response.duration =
          response.config.metadata.endTime - response.config.metadata.startTime;
          return response;
        },
        function(error) {
          error.config.metadata.endTime = new Date();
          error.duration =
          error.config.metadata.endTime - error.config.metadata.startTime;
          return Promise.reject(error);
        }
    );
  }

  /**
   * Return base URL of the current Http Client
   */
  getBaseUrl() {
    return this._baseUrl;
  }

  /**
   * Send request to the desired end point.
   * @param method use HttpMethod enum
   * @param url url string that should be appended to the base url
   * @param data data that should be sent, if any.
   */

  request(method, url, token, data, params) {
    return Axios.default.request({
      baseURL: this._baseUrl,
      method,
      url,
      headers: {
        Authorization: token || '',
        Accept: `${
          this._options && this._options.versionOfApi ?
            this._options.versionOfApi :
            'application/json'
        }`,
      },
      data,
      params,
    });
  }
}
