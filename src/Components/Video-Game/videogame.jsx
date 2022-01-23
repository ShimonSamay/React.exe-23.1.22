import React , {Component} from "react" ;
import { clientContext } from "../../Context/context";

export default class Videogame extends Component {
render () {
    return (
        <div>
            <h1>Game Component</h1>
            <clientContext.Consumer>
            {value => <h1>{value}</h1>}
            </clientContext.Consumer>   
        </div>
    )
}
}
