import React from "react";
import { useRecoilValue } from "recoil";
import { passwordOptionsState } from "../../atoms/passwordOptions"

import { Container, Bar } from "./styles";

interface PasswordStrengthProps {
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpperChar: boolean;
  includeLowerChat: boolean;
}

const calculatePasswordStrength = ({
  includeNumbers,
  includeSymbols,
  includeUpperChar,
  includeLowerChat,
}: PasswordStrengthProps) => {
  let score = 0;

  // Check for uppercase characters
  if (includeUpperChar) {
    score += 1;
  }

  // Check for lowercase characters
  if (includeLowerChat) {
    score += 1;
  }

  // Check for numbers
  if (includeNumbers) {
    score += 1;
  }

  // Check for symbols
  if (includeSymbols) {
    score += 1;
  }

  return score;
};

export function PasswordStrength() {
  
  const passwordOptions = useRecoilValue(passwordOptionsState)
  console.log("🚀 ~ passwordOptions", passwordOptions)

  const strength = calculatePasswordStrength(passwordOptions);

  console.log("🚀 ~ strength", strength);

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
