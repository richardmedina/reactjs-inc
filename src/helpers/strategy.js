
export const defaultStrategy = (state, action) => {
  console.log('Running default strategy state: ', state)
  console.log('Running default strategy action: ', action)
  return state
}

export const runStrategy = (strategies, state, action) => {
  const strategy = strategies[action.type] ?? defaultStrategy

  if(!strategies[action.type]) {
    return defaultStrategy(state, action)
  }

  return strategy(state, action.payload)
}
