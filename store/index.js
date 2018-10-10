export const state = () => ({
  pieces: [],
  portfolioPieces: []
})

export const mutations = {
  setPieces(state, pieces) {
    state.pieces = pieces
  },
  setPortfolioPieces(state, portfolioPieces) {
    state.portfolioPieces = portfolioPieces
  }
}
