import { atom } from "recoil";

export const isAuthenticated = atom({
  key: Date.now().toString(),
  default: localStorage.getItem("token") === null ? false : true,
});
