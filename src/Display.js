import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component() {

    displaySuperHeros() {
        return this.state.superherosToDisplay.map((element,i)=>{
          return(
            <div key = {i}>
              <div className = 'box'>
                <div>{element.name}</div>
                <div>{element.description==''?'No Description Available':element.description}</div>
                <div><img src={element.thumbnail.path}></img></div>
              </div>
            </div>
          ) 
        })
      }

}

export default Display;