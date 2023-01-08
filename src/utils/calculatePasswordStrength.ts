interface PasswordStrengthProps {
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpperChar: boolean;
  includeLowerChar: boolean;
}

export const calculatePasswordStrength = ({
  includeNumbers,
  includeSymbols,
  includeUpperChar,
  includeLowerChar,
}: PasswordStrengthProps) => {
  let strength = 0;
  let characterPool = "";

  // Check for uppercase characters
  if (includeUpperChar) {
    strength += 1;
    characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Check for lowercase characters
  if (includeLowerChar) {
    strength += 1;
    characterPool += "abcdefghijklmnopqrstuvwxyz";
  }

  // Check for numbers
  if (includeNumbers) {
    strength += 1;
    characterPool += "0123456789";
  }

  // Check for symbols
  if (includeSymbols) {
    strength += 1;
    characterPool += "!@#$%^&*(){}[]=<>,.?/~";
  }

  return { strength, characterPool };
};