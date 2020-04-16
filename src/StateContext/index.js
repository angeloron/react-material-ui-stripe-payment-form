import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

const StateContext = createContext();

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);