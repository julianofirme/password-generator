import React from "react";
import { useRecoilValue } from "recoil";
import { sliderState } from "../../atoms/slider";
import { Checkbox } from "../Checkbox";
import { GenerateButton } from "../GenerateButton";
import { PasswordStrength } from "../PasswordStrength";
import { Slider } from "../Slider";

import { Container, CharLength, Includes } from "./styles";

export function PasswordOptions() {
  const slideValue = useRecoilValue(sliderState)

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
        <Checkbox name="uppercase" label="Include uppercase characters" />
        <Checkbox name="lowercase" label="Include lowercase characters" />
        <Checkbox name="numbers" label="Include numbers" />
        <Checkbox name="symbols" label="Include symbols" />
      </Includes>

      <PasswordStrength password="123a" />

      <GenerateButton onClick={() => console.log('foo')}/>
    </Container>
  );
}
