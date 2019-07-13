export const state = () => ({
  pageId: null
})

export const mutations = {
  setPage (state, pageId) {
    state.pageId = pageId
  }
}
export const getters = {
  pageId (state) {
    return state.pageId
  }
}
