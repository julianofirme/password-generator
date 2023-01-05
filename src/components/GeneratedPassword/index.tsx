import React from "react";
import { MdOutlineFileCopy } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { passwordState } from "../../atoms/password";

import { Container } from "./styles";

export function GeneratedPassword() {
  const password = useRecoilValue(passwordState);

  return (
    <Container>
      <h3>{password}</h3>
      <button
        onClick={() => {
          navigator.clipboard.writeText(password);
        }}
      >
        <MdOutlineFileCopy />
      </button>
    </Container>
  );
}
