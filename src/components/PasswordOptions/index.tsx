import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { passwordOptionsState } from "../../atoms/passwordOptions";
import { sliderState } from "../../atoms/slider";
import { Checkbox } from "../Checkbox";
import { GenerateButton } from "../GenerateButton";
import { PasswordStrength } from "../PasswordStrength";
import { Slider } from "../Slider";

import { Container, CharLength, Includes } from "./styles";

export function PasswordOptions() {
  const slideValue = useRecoilValue(sliderState);
  const [passwordOptions, setPasswordOptions] =
    useRecoilState(passwordOptionsState);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setPasswordOptions({
      ...passwordOptions,
      [name]: checked,
    });
  };

  return (
    <Container>
      <CharLength>
        <div>
          <p>Character Length</p>
          <span>{slideValue}</span>
        </div>

        <Slider />
      </CharLength>

      <Includes>
        <Checkbox
          name="includeUpperChar"
          label="Include uppercase characters"
          onChange={handleCheckboxChange}
        />
        <Checkbox
          name="includeLowerChat"
          label="Include lowercase characters"
          onChange={handleCheckboxChange}
        />
        <Checkbox
          name="includeNumbers"
          label="Include numbers"
          onChange={handleCheckboxChange}
        />
        <Checkbox
          name="includeSymbols"
          label="Include symbols"
          onChange={handleCheckboxChange}
        />
      </Includes>

      <PasswordStrength />

      <GenerateButton onClick={() => console.log("foo")} />
    </Container>
  );
}
