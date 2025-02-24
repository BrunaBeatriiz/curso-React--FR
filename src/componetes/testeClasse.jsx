import Titulo from "./titulo";
import React from "react";

class Teste extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "hello wolrd!",
        }
    }
    componentDidMount(){
        console.log("Voce acabou de acessar a paginá.");
    }
    render(){
        return<h1>
            {this.state.message};
        </h1>
    }
}

export default Teste;