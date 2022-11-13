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

export const heroesDeleted = (id) => {
  return {
    type: 'HEROES__DELETED',
    payload: id
  }
}

export const heroCreated = (hero) => {
  return {
    type: 'HERO__CREATED',
    payload: hero
  }
}
