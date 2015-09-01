import fetch from 'isomorphic-fetch';
import text from './utils/text';

export default function get(url, options = {
  method: 'get',
  credentials: 'same-origin'
}) {
  return fetch(url, options)
    .then(status)
    .then(text);
}
