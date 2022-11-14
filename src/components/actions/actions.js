/* export const heroesFetching = () => {
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
} */

export const filtersFetching = () => {
  return {
   type: 'FILTERS__FETCHING'
  }
}

export const filtersFetched = (filters) => {
  return {
   type: 'FILTERS__FETCHED',
   payload: filters
  }
}

export const filtersFetchingError = () => {
  return {
   type: 'FILTERS__FETCHING__ERROR'
  }
}

export const activeFilter = (active) => {
  return {
   type: 'ACTIVE__FILTER',
   payload: active
  }
}
