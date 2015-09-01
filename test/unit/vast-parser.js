import parse from '../../src/vast-parser';
import { DOMParser } from 'xmldom';

const VAST_DUMMY = '<?xml version="1.0"?><VAST version="2.0"></VAST>';

describe('parse', () => {
  it('should return the correct typeof', () => {
    function parseFake() {
      return parse()(VAST_DUMMY, {}, DOMParser);
    }
    expect(parseFake(), 'parse return').to.equal('object');
  });

  it('should use a custom parser when supplied', () => {
    class FakeParser {
      parseFromString(string, mimeType) {
        return function() {};
      }
    }

    function parseAlternative() {
      return parse()(VAST_DUMMY, {}, FakeParser);
    }

    expect(parseAlternative(), 'parse alternative').to.equal('function');
  });
});
