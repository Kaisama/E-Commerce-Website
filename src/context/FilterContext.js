import React, { createContext,useContext, useReducer } from 'react'
import { useProductContext } from './productcontext';

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:'lowest',
}

export const FilterContextProvider = ({children}) => {

    const  {products} =useProductContext();

    const[state,dispatch]=useReducer(reducer,initialState)

    return <FilterContext.Provider value={{...state}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}

