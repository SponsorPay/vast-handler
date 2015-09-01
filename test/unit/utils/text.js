import text from '../../../src/utils/text';

describe('text', () => {
  it('calls and returns the text function on the response', () => {
    const subject = {
      text() {
        return 'returned text';
      }
    };
    expect(text(subject)).to.equal('returned text');
  });
});
