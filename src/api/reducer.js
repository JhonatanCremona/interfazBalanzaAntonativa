export const reducer = (state, action) => {
    switch (action.type) {
    case 'SET_TODOS':
      return {
        todos: [...action.payload]
      }
    default:
      return state
  }
}