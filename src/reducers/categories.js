const initalState = {
  categories: [],
  isFetching: false,
  isFetched: false,
  error: null
}

export default (state = initalState, { type, ...payload }) => {
  switch (type) {
    case 'FETCH_CATEGORIES_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: payload.categories,
        isFetching: false,
        isFetched: true
      }
    case 'FETCH_CATEGORIES_FAILURE':
      return {
        ...state,
        error: payload.error,
        isFetching: false,
        isFetched: false
      }
    default:
      return state
  }
}
