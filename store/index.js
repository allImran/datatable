export const state = () => ({
  isGridView: false,
  profiles: [],
  query: {},
  isDataFetching: false,
  showSidebar: true
})

export const getters = {
  getTableViewType: (state) => state.isGridView,
  getProfileCount: (state) => state.profiles.length,
  getProfiles: (state) => state.profiles,
  getQuery: (state) => state.query,
  getFetchStatus: (state) => state.isDataFetching,
  getSidebarStatus: (state) => state.showSidebar,
}

export const mutations = {
  setTableViewType: (state, data) => state.isGridView=data,
  setProfiles: (state, data) => state.profiles=data,
  setFetchStatus: (state, data) => state.isDataFetching=data,
  setSidebarStatus: (state, data) => state.showSidebar=data,
  setQuery: (state, data) => {
    if(data.value == null) {
      delete state.query[data.key]
    }else {
      state.query[data.key] = data.value
    }
  }
}