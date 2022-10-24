import React, { useReducer } from "react";

import Context from "./context/context";
import Store from "./redux/store";
import rootReducer from "./redux/rootReducer";


const StatesProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(rootReducer, Store);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default StatesProvider;