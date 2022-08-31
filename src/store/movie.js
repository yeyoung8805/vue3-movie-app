import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    movies: [],
  }),
  getters: {},
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    async searchMovies() {
      const OMDB_API_KEY = "7035c60c";
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`
      );
      console.log(res);
    },
  },
};
