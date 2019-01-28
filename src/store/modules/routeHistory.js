let routeList = {
  state: {
    routeList: {}
  },
  mutations: {
    ADD_HISTORY(state, payload) {
      state.routeList[payload.name] = payload;
    }
  },
  actions: {
    addHistory({ commit, state }, payload) {
      console.log(state);
      if (state.routeList.hasOwnProperty(payload.name)) {
        console.log("cache");
      } else {
        console.log("new");
        commit("ADD_HISTORY", payload);
      }
    }
  },
  getters: {}
};

export default routeList;
