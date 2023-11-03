import React, { createContext, useReducer, useContext } from 'react';

const MovieContext = createContext();

const initialState = {
  searchTerm: '',
  movies: [],
  status: 'active',
  error: ''
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.payLoad };
    case 'UPDATE_MOVIES':
      return { ...state, movies: action.payLoad };
    case 'LOADING_ON':
      return {...state, status: 'loading'}
    case 'LOADING_OFF':
        return {...state, status: 'active'}
    case 'DATA_RECIEVED':
      return {...state, status: 'ready'}
    case 'DATA_ERROR':
        return {...state, status: 'error',error: action.payLoad}
    default:
      return state;
  }
};
const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovieContext = () => {
  return useContext(MovieContext);
};

export{MovieProvider,useMovieContext}