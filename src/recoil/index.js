import { atom, selector } from "recoil";

export const numberState = atom({ key: "Number", default: 0 });

export const multipliedState = selector({
  key: "MultipliedNumber",
  get: ({ get }) => get(numberState) * 100
});
