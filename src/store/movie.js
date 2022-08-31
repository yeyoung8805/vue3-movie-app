export default {
  //module로 활용할수 있다는 뜻
  namespaced: true,
  //취급해야 하는 data
  state: () => ({
    movies: [],
  }),
  //computed 계산된 데이터를 만들어내는 상태
  getters: {
    movieIds(state) {
      return state.movies.map((m) => m.imdbID);
    },
  },
  //methods 와 유사한 mutations, actions
  //mutations : 변이. state의 data는 mutations 에서만 수정하는게 허용되며 getters, actions 에서 수정하는게 허용되지 않는다.
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
  },
  //actions : 비동기로 작동한다.
  actions: {
    searchMovies(context) {
      context.state;
      context.getters;
      context.commit;
    },
  },
};
