import React , {Component} from "react" ;
import { clientContext } from "../../Context/context";

export default class Puzzale extends Component {
    render () {
        return (
            <div>
                <h1>puzzale component</h1>
                <h1>{clientContext._currentValue}</h1>
            </div>
        )
    }
}