import React from "react";
import { Checkbox } from "../Checkbox";
import { Slider } from "../Slider";

import { Container, CharLength, Includes } from "./styles";

export function PasswordOptions() {
  return (
    <Container>
      <CharLength>
        <div>
          <p>Character Length</p>
          <span>10</span>
        </div>

        <Slider />
      </CharLength>

      <Includes>
        <Checkbox name="uppercase" label="Include uppercase characters" />
        <Checkbox name="lowercase" label="Include lowercase characters" />
        <Checkbox name="numbers" label="Include numbers" />
        <Checkbox name="symbols" label="Include symbols" />
      </Includes>
    </Container>
  );
}
