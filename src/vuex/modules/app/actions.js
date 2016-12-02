export const changeLeftNavState = ({commit}, isShow) => {
  commit('CHANGE_LEFTNAV_STATE', isShow)
}
export const getGameTitle = ({commit}, title) => {
  commit('GET_GAME_TITLE', title)
}
