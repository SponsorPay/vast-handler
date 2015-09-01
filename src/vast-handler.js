import get from './url-handler-fetch';
import parse from './vast-parser';

export default function createHandler(options = {
  get,
  parse
}) {
  return {
    options,
    get: options.get,
    parse: options.parse,
    greet() {
      return 'hello world!';
    }
  };
}
