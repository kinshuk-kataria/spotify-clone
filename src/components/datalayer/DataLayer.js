/** @format */

import React, { createContext, useContext, useReducer } from 'react'

export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
)

//way to dispatching or getting value from Data layer
export const useDataLayerValue = () => useContext(DataLayerContext)
