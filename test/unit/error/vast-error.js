import VASTError from '../../../src/errors/vast-error';

describe('VASTError', () => {
  it('throws default message', () => {
    function throwsDefault() {
      throw new VASTError();
    }
    expect(throwsDefault).to.throw(VASTError, 'Error while parsing VAST Tag');
  });

  it('throws the correct message', () => {
    function throwsMessage() {
      throw new VASTError('noVersion');
    }
    expect(throwsMessage).to.throw(VASTError, 'VAST Version is required');
  });
});
