import { createStore } from "vuex";
import movie from "./movie.js";
import about from "./about.js";

export default createStore({
  modules: {
    hello: movie,
    about,
  },
});
