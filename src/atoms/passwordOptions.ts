import { atom } from "recoil";

export const passwordOptionsState = atom({
  key: "PasswordOptions",
  default: {
    includeNumbers: false,
    includeSymbols: false,
    includeUpperChar: false,
    includeLowerChar: false,
  }
})