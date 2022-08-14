import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
3

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div class='centre'>
             <HomePage/>
    
        </div>
       );

    }
}

const appDiv = document.getElementById("app")
render(<App/>, appDiv)
