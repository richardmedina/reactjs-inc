
export const defaultStrategy = (state) => state

export const runStrategy = (strategies, state, action) => {
  const strategy = strategies[action.type] ?? defaultStrategy

  if(!strategies[action.type]) {
    return defaultStrategy(state, action)
  }

  return strategy(state, action.payload)
}
