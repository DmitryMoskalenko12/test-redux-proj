export const heroesFetching = () => {
  return {
    type: 'HEROES__FETCHING'
  }
}

export const heroesFetched = (heroes) => {
  return {
    type: 'HEROES__FETCHED',
    payload: heroes
  }
}

export const heroesFetchingError = () => {
  return {
    type: 'HEROES__FETCHING__ERROR'
  }
}