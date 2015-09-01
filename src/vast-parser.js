export default function parseVast(options) {
  return function(xmlString = '', acc = {}, Parser = DOMParser) {
    const xmlDocument = (new Parser()).parseFromString(xmlString, 'application/xml');

    return typeof xmlDocument;
  };
}
