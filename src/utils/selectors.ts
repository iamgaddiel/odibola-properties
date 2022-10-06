import { selector } from "recoil";
import { devMode } from "./atoms";

export const devDomain = selector({
  key: "DEV_DOMAIN",
  get: ({ get }) => {
    let devState = get(devMode);
    switch (devState) {
      case "development":
        return "http://localhost:8000";
      case "production":
        return "https://odibola.pythonanywhere.com";
    }
  },
});
