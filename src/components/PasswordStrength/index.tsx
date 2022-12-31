import React from "react";

import { Container, Bar } from "./styles";

interface PasswordStrengthProps {
  password: string;
}

const calculatePasswordStrength = (password: string) => {
  let strength = 0;

  if (password.length >= 8) {
    strength += 1;
  }

  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^a-zA-Z0-9]/.test(password)
  ) {
    strength += 1;
  }

  return strength;
};

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = calculatePasswordStrength(password);
  console.log("🚀 ~ strength", strength);

  return (
    <Container>
      <p>STRENGTH</p>
      <div>
        <Bar strength={strength} />
        <Bar strength={strength === 0 ? null : strength} />
        <Bar strength={strength === 1 || strength === 0 ? null : strength} />
      </div>
    </Container>
  );
}
