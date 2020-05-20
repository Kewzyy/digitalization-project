interface action {
  type: string
  payload: any
}

export default (state = [], action: action) => {
  switch (action.type) {
    case 'FETCH_ORDERS':
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
}
