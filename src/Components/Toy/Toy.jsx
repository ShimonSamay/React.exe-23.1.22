import React , {Component} from "react" ;
import Puzzale from "../Puzzale/puzzale";
import Videogame from "../Video-Game/videogame";
import Ball from "../Ball/ball";

export default class Toy extends Component {
    constructor(props){
        super(props)
    this.state = {Company : "" }
    this.ChangeValue = this.ChangeValue.bind(this);
    this.PrintName = this.PrintName.bind(this);
}

ChangeValue (e) {
this.state.Company = e.target.value
}

componentWillMount () {
    alert("welcome");
}
componentDidMount(){
    alert("well mounted")
}
componentWillUpdate(){
    alert("state not uptated")
}
componentDidUpdate(){
    alert("state updated")
}

PrintName (){
this.setState({Company : this.state.Company})
}
    render () {
        let {toyname} = this.props ;
        return (
            <div>
                <h1>Toy Component</h1>
                <h1> toy:{toyname}</h1>
                <input type="text" onChange={this.ChangeValue}></input>
                <button onClick={this.PrintName}>Print name</button>
                <h1>company : {this.state.Company}</h1>
                <Puzzale/>
                <Videogame/>
                <Ball/>
            </div>
        )
    }
}