import api from '../apiResponses';
import Alert from '../infrastructure/Alert';

class BaseApiRepository {
  _resource = null;

  static baseUrl() {
    return process.env.REACT_APP_API_BASE_URL;
  }

  static buildFor(resource) {
    const repository = new BaseApiRepository;
    repository.setResource(resource);
    return repository;
  }

  resourceUrl() {
    return `${BaseApiRepository.baseUrl()}/${this._resource}`;
  }

  setResource(resource) {
    this._resource = resource;
  }

  useMocks() {
    return Boolean(process.env.REACT_APP_USE_MOCKS);
  }

  http(path = '', config = {}) {
    return fetch(`${this.resourceUrl()}/${path}`, {
      ...config,
      headers: {
        Authtoken: process.env.REACT_APP_API_AUTH_TOKEN
      },
      // mode: 'no-cors',
    });

  }

  async list() {
    this.assertResourceIsDefined();

    try {
      if (this.useMocks()) {
        const json = api[this._resource][`${this._resource}ListResponse`];
        return json.data;
      }

      const response = await this.http();
      console.log('LIST RESPONSE', response);

      if (!response.ok) {
        Alert.error(`The list ${this._resource} request failed.`);
      }

      const json = await response.json();
      console.log('LIST JSON', json);

      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async get(resourceId) {
    this.assertResourceIsDefined();

    try {
      if (this.useMocks()) {
        const json = api[this._resource][`${this._resource}GetResponse`];
        return json.data;
      }

      const response = await this.http(resourceId);
      console.log('GET RESPONSE', response);

      if (!response.ok) {
        Alert.error(`The get ${this._resource} request failed.`);
      }

      const json = await response.json();
      console.log('GET JSON', json);

      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async create(data) {
    this.assertResourceIsDefined();

    try {
      if (this.useMocks()) {
        const json = api[this._resource][`${this._resource}CreateResponse`];
        return json.data;
      }

      const response = await this.http('', {
        method: 'POST',
        body: data
      });
      console.log('CREATE RESPONSE', response);

      if (!response.ok) {
        Alert.error(`The create ${this._resource} request failed.`);
      }

      const json = await response.json();
      console.log('CREATE JSON', json);

      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(resourceId, data) {
    this.assertResourceIsDefined();

    try {
      if (this.useMocks()) {
        const json = api[this._resource][`${this._resource}UpdateResponse`];
        return json.data;
      }

      const response = await this.http(resourceId, {
        method: 'PUT',
        body: data
      });
      console.log('UPDATE RESPONSE', response);

      if (!response.ok) {
        Alert.error(`The update ${this._resource} request failed.`);
      }

      const json = await response.json();
      console.log('UPDATE JSON', json);

      return json.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(resourceId) {
    this.assertResourceIsDefined();

    try {
      if (this.useMocks()) {
        const json = api[this._resource][`${this._resource}DeleteResponse`];
        return json.data;
      }

      const response = await this.http(resourceId, {
        method: 'DELETE',
      });
      console.log('DELETE RESPONSE', response);

      if (!response.ok) {
        Alert.error(`The delete ${this._resource} request failed.`);
      }

      const json = json = await response.json();
      console.log('DELETE JSON', json);

      return json;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  assertResourceIsDefined() {
    if (!this._resource) {
      throw new Error('<BaseApiRepository> API resource is not defined.');
    }
  }
}

export default BaseApiRepository;
