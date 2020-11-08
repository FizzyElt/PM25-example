import fakeData from './fakeData';
import { token } from './apiToken';

const url = '/api/v1/aqx_p_02';
export const fetchData = () => {
  let query = new URLSearchParams('');
  query.set('limit', 100);
  query.set('api_key', token);

  return new Promise((resolve, reject) => {
    fetch(`${url}?${query.toString()}`, {
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json',
      },
      param: {
        api_key: token,
        limit: 100,
      },
    })
      .then((res) => res.json())
      .then((data) => resolve(data.records))
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
};
const customApi = 'http://localhost:9000/pm25';
export const GetData = () => {
  return new Promise((resolve, reject) => {
    fetch(customApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.records);
        resolve(data.records);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
