import React, { Component } from "react";
import Display from "./AppDisplay";
// class based components

class App extends Component {

  grocery = [{
            name: 'Apple',
            quantity: 1,
            price: '50'
          },{
            name: 'Orange',
            quantity: 2,
            price: '55'
          }
          ,{
            name: 'banana',
            quantity: 3,
            price: '25'
          }
        ]

  render(){
    return(
      <div>
      <Display dataInfo ={this.grocery}/>
      </div>

    ); 
  }
}

export default App;
