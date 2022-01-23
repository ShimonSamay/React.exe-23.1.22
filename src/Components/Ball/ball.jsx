import React, { useContext }  from "react" ;
import { clientContext } from "../../Context/context";

export default function Ball () {
let clientBallContext = useContext(clientContext)
    return (
        <div>
            <h1>Ball Component</h1>
            <h1>{clientBallContext}</h1>
        </div>
    )
}