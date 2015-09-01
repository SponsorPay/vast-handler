import createHandler from '../../src/vast-handler';
import get from '../../src/url-handler-fetch';
import parse from '../../src/vast-parser';

describe('vastHandler', () => {
  describe('Greet function', () => {
    let vastHandler;

    beforeEach(() => {
      vastHandler = createHandler();
    });

    it('should have been run once', () => {
      spy(vastHandler, 'greet');
      vastHandler.greet();
      expect(vastHandler.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      spy(vastHandler, 'greet');
      vastHandler.greet();
      expect(vastHandler.greet).to.have.always.returned('hello world!');
    });

    it('should use default get and parse', () => {
      expect(vastHandler.get, 'get method').to.equal(get);
      expect(vastHandler.parse, 'parse method').to.equal(parse);
    });
  });
});
