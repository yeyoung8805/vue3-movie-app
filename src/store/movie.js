import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: "",
    loading: false,
  }),
  getters: {},
  mutations: {
    assignMovies(state, Search) {
      state.movies = Search;
    },
    //need more mutations for message, loading etc..
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    async searchMovies(context, payload) {
      const { title, type, number, year } = payload;
      const OMDB_API_KEY = "7035c60c";

      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`
      );
      const { Search, totalResults } = res.data;
      context.commit("assignMovies", Search);
    },
  },
};
