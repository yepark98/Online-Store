import { atom } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const stockState = atom({
  key: "stockState",
  default: false,
});
