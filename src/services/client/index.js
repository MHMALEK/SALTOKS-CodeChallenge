import {HttpClient} from 'utils/http-client';
import appOptions from 'Src/options';
/**
 * SaltoKS http client for requests
 */
const publicHttpClient = new HttpClient(process.env.BASE_API_URL, {
  versionOfApi: appOptions.api.currentVersion,
});

const privateHttpClient = new HttpClient(process.env.BASE_API_URL, {
  versionOfApi: appOptions.api.currentVersion,
  token: '', // todo
});

export {publicHttpClient, privateHttpClient};
