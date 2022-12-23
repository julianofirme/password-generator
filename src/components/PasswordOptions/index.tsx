import React from "react";
import { Slider } from "../Slider";

import { Container, CharLength } from "./styles";

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
    </Container>
  );
}
