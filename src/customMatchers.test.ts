import { customExpect } from "./customMatchers" 
describe('expect function', () => {
  test('should return true for toBe when values are equal', () => {
    const result = customExpect(5).toBe(5);
    expect(result).toBe(true);
  });

  test('should return false for toBe when values are not equal', () => {
    const result = customExpect(5).toBe(3);
    expect(result).toBe(false);
  });

  test('should return true for not.toBe when values are not equal', () => {
    const result = customExpect(5).not.toBe(3);
    expect(result).toBe(true);
  });

  test('should return false for not.toBe when values are equal', () => {
    const result = customExpect(5).not.toBe(5);
    expect(result).toBe(false);
  });
});
