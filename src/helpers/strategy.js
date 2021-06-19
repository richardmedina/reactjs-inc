
export const defaultStrategy = state => state

export const runStrategy = (strategies, state, action) => {
  const strategy = strategies[action.type] ?? defaultStrategy(state)
  return strategy(state)
}
