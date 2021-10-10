import axios, { AxiosResponse } from "axios";

export const apiBase = "http://localhost:4000";

export class BaseService {
  static readonly UNWRAP = { unwrap: true };

  protected static async getApi<R>(path: string, options = this.UNWRAP) {
    const response = await axios.get<R>(`${apiBase}/${path}`);

    // Do interception or global handling here
    // ...

    return this.handleResponse(response, options);
  }

  protected static async postApi<T>(path: string, body?: any, options = this.UNWRAP) {
    const response = await axios.post<T>(`${apiBase}/${path}`, body);

    // Do interception or global handling here
    // ...
    return this.handleResponse<T>(response, options);
  }

  protected static async deleteApi(path: string, options = this.UNWRAP) {
    const response = await axios.delete(`${apiBase}/${path}`);

    // Do interception or global handling here
    // ...

    return this.handleResponse(response, options);
  }

  protected static async patchApi<T>(path: string, body: T, options = this.UNWRAP) {
    const response = await axios.patch(`${apiBase}/${path}`, body);

    // Do interception or global handling here
    // ...

    return this.handleResponse(response, options);
  }

  private static handleResponse<T>(response: AxiosResponse<T>, options = this.UNWRAP) {
    if (options?.unwrap) return response.data as T;
    return response as AxiosResponse<T>;
  }
}
