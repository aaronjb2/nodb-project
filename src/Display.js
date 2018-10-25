import React, { Component } from 'react';
import axios from 'axios';
import ShowDate from './ShowDate.js';
import './Display.css';

class Display extends Component {
  constructor(props){
    super(props);
    this.state = {
      superheroToDisplay:this.props.hero,
      index:this.props.index
    }
  }

  render(){
    return( 
      <div key = {this.state.index}>
          <div className = 'box'>
            <div>{this.state.superheroToDisplay.name}</div>
            <div>{this.state.superheroToDisplay.description==''?'No Description Available':this.state.superheroToDisplay.description}</div>
            <div><img src={this.state.superheroToDisplay.thumbnail.path}></img></div>
            <div><ShowDate date={this.state.superheroToDisplay.modified}/></div>
          </div>
        </div>
    )
  }
}

export default Display;