import { MovieType } from "@utils/model/movieModel";
import { atom } from "recoil";

const moviePageState = atom<number>({
  key: "moviePageState",
  default: 1,
});

export { moviePageState };
