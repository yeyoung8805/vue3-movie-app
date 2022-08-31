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
  mutations: "",
  actions: "",
};
