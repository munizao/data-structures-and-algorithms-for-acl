const multiBracketValidation = require('./multi-bracket-validation');

describe ('multiBracketValidation module', () => {
  it('returns true for {}(){}', () => {
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
  });
  it('returns true for ()[[Extra Characters]]', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
  });
  it('returns false for [({}]', () => {
    expect(multiBracketValidation('[({}]')).toBeFalsy();
  });
  it('returns false for {(})', () => {
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });
  it('returns true for {}{Code}[Fellows](())', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('returns false for (](', () => {
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
});
