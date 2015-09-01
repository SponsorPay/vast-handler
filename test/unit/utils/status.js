import status from '../../../src/utils/status';

describe('status', () => {
  it('returns response when valid', () => {
    const validResponse = {
      status: 200
    };
    expect(status(validResponse, 'valid response range')).to.equal(validResponse);
  });

  it('throws when response invalid', () => {
    function throwStatus() {
      return status({
        status: 400,
        statusText: 'Request denied'
      });
    }
    expect(throwStatus).to.throw(Error, 'Request denied');
  });
});
