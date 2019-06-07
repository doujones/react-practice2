import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default class Counter extends Component {
  state ={
    count: 1,
    
  };
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount}</span>
        <button className="btn btn-secondardy btn-sm">Increment</button>
      </div>
    );
  }


formatCount(){
  const { count } = this.state;
  return count === 0 ? "One" : count;
}

}