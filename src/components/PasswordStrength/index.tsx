import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { characterPoolState } from "../../atoms/characterPool";
import { passwordOptionsState } from "../../atoms/passwordOptions";
import { calculatePasswordStrength } from "../../utils/calculatePasswordStrength";

import { Container, Bar } from "./styles";

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
