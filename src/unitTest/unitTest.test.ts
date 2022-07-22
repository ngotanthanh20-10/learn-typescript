import { isPositive } from './unitTest';

describe('isPositive()', () => {
  it('n > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(8)).toBe(true);
    expect(isPositive(1000)).toBe(true);
  });
  it('n = 0', () => {
    expect(isPositive(0)).toBe(false);
  });
  it('n < 0', () => {
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-120)).toBe(false);
    expect(isPositive(-8)).toBe(false);
  });
});
