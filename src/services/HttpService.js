import React from 'react';
import { Redirect } from 'react-router-dom';

//const baseUrl = 'https://www.googleapis.com/youtube/v3/videos';

export class HttpService {
  static request = async (url, method = 'GET', body = null, options = {}) => {
    const requestOptions = {
      method,
      ...options,
      headers: {
        'Content-type': 'application/json',
        ...options.headers,
      },
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${url}`, requestOptions);

    return this.parseResponse(response);
  };

  static parseResponse = async response => {
    const { ok, status, statusText } = response;

    if (status === 401) {
      return <Redirect to="/login" />;
    }

    if (ok) {
      return response.json();
    }

    return Promise.reject(statusText);
  };

  static get = (url, options) => {
    return this.request(url, 'GET', null, options);
  };

  static post = (url, body, options) => {
    /**
     * @param {string} url
     * @param {object} body
     * @param {object} options
     */

    return this.request(url, 'POST', body, options);
  };
}
