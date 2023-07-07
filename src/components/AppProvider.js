import React from "react"
import { useState, createContext } from "react";

const AppContext = createContext({});

function AppProvider ({children}) {
    const [toDoList, setToDoList] = React.useState([]); 
    const [isLoading, setIsLoading] = React.useState(true);
    const [direction, setDirection] = React.useState('asc');
    const [sortType, setSortType] = React.useState('Sort A-Z');
    //add generic err state?

    return (
        <AppContext.Provider
            value={{
                toDoList, setToDoList,
                isLoading, setIsLoading,
                direction, setDirection,
                sortType, setSortType
            }}>
            {children}
        </AppContext.Provider>
    )
}

export  { AppContext, AppProvider};