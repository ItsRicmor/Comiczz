import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export enum RequestMethod {
  Get = 'GET'
}

export async function get(endpoint: string, params?: any, requestConfig?: AxiosRequestConfig): Promise<AxiosResponse> {
  const paramsConfig: AxiosRequestConfig | undefined = params ? { params } : undefined;

  return _request(
    {
      url: endpoint,
      method: RequestMethod.Get,
    },
    {
      ...paramsConfig,
      ...requestConfig,
    }
  );
}

export async function _request(restRequest: Partial<Request>, config?: AxiosRequestConfig): Promise<any> {
  if (!Boolean(restRequest.url)) {
    console.error(`Received ${restRequest.url} which is invalid for a endpoint url`);
  }

  const axiosRequestConfig: AxiosRequestConfig = {
    ...config,
    method: restRequest.method as Method,
    url: restRequest.url,
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
  };
  const [axiosResponse] = await Promise.all([axios(axiosRequestConfig), _delay()]);

  return {
    ...axiosResponse.data,
  };

}

/**
 * We want to show the loading indicator to the user but sometimes the api
 * request finished too quickly. This makes sure there the loading indicator is
 * visual for at least a given time.
 *
 * @param duration
 * @returns {Promise<void>}
 * @private
 */
function _delay(duration: number = 250): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
