import { calculatePasswordStrength } from './calculatePasswordStrength';
import { describe, it, expect } from 'vitest';

describe('calculatePasswordStrength', () => {
  it('should return strength of 0 and empty character pool when no options are true', () => {
    const result = calculatePasswordStrength({
      includeLowerChar: false,
      includeNumbers: false,
      includeSymbols: false,
      includeUpperChar: false,
    });
    expect(result).to.deep.equal({
      strength: 0,
      characterPool: '',
    });
  });

  it('should return strength of 1 and only lowercase characters in character pool when only includeLowerChar is true', () => {
    const result = calculatePasswordStrength({
      includeLowerChar: true,
      includeNumbers: false,
      includeSymbols: false,
      includeUpperChar: false,
    });
    expect(result).to.deep.equal({
      strength: 1,
      characterPool: 'abcdefghijklmnopqrstuvwxyz',
    });
  });

  it('should return strength of 2 and only upper and lowercase characters in character pool when only includeUpperChar and includeLowerChar are true', () => {
    const result = calculatePasswordStrength({
      includeLowerChar: true,
      includeNumbers: false,
      includeSymbols: false,
      includeUpperChar: true,
    });
    expect(result).to.deep.equal({
      strength: 2,
      characterPool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    });
  });

  it('should return strength of 3 and only upper and lowercase characters and numbers in character pool when includeUpperChar, includeLowerChar, and includeNumbers are true', () => {
    const result = calculatePasswordStrength({
      includeLowerChar: true,
      includeNumbers: true,
      includeSymbols: false,
      includeUpperChar: true,
    });
    expect(result).to.deep.equal({
      strength: 3,
      characterPool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    });
  });

  it('should return strength of 4 and all character types in character pool when all options are true', () => {
    const result = calculatePasswordStrength({
      includeLowerChar: true,
      includeNumbers: true,
      includeSymbols: true,
      includeUpperChar: true,
    });
    expect(result).to.deep.equal({
      strength: 4,
      characterPool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>,.?/~',
    });
  });
});
