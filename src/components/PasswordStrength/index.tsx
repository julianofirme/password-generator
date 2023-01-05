import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { characterPoolState } from "../../atoms/characterPool";
import { passwordOptionsState } from "../../atoms/passwordOptions";

import { Container, Bar } from "./styles";

interface PasswordStrengthProps {
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpperChar: boolean;
  includeLowerChar: boolean;
}

const calculatePasswordStrength = ({
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

export function PasswordStrength() {
  const passwordOptions = useRecoilValue(passwordOptionsState);
  const [characterPoolValue, setCharacterPoolValue] = useRecoilState(characterPoolState);

  const { strength, characterPool } = calculatePasswordStrength(passwordOptions);
  
  useEffect(() => {
    setCharacterPoolValue(characterPool);
  }, [characterPool])

  return (
    <Container>
      <p>STRENGTH</p>
      <div>
        <Bar strength={strength === 0 || strength >= 1 ? strength : null} />
        <Bar strength={strength === 2 || strength >= 3 ? strength : null} />
        <Bar strength={strength === 4 ? strength : null} />
      </div>
    </Container>
  );
}
