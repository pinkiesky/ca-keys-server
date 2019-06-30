import { getReq } from './xhr';


export default async function loaders(req, funcName, keyName) {
  if (req && req.$keys) {
    return req.$keys[funcName](keyName);
  }

  return JSON.parse(await getReq(`/api/${funcName}?name=${keyName}`));
}
