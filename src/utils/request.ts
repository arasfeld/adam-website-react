export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response: Response): Response {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new ResponseError(response);
}

export default function request(url: string, options?: object): Promise<any> {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
