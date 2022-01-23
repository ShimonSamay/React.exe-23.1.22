import React  from "react";

export let clientContext = React.createContext();

export default function ContextProvider (props) {
    return (
        <clientContext.Provider>
            {props.Elements}
        </clientContext.Provider>
    )
}