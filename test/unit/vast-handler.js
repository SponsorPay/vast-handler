import vastHandler from '../../src/vast-handler';

describe('vastHandler', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(vastHandler, 'greet');
      vastHandler.greet();
    });

    it('should have been run once', () => {
      expect(vastHandler.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(vastHandler.greet).to.have.always.returned('hello');
    });
  });
});
