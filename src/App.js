import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInputTitle: '',
      userInputPowers: '',
      superherosToDisplay: [],
      superheroData: []
    }
  }

  getSuperheros() {
    let promise = axios.get('/powerful/superheros');
    promise.then(res=> {
      console.log(res);
      this.setState({
        superherosToDisplay: res.data
      })
    })
  }

  addSuperhero() {
    let promise = axios.post('/powerful/superheros', {title:this.state.userInputTitle, powers:this.state.userInputPowers});
    promise.then(res=> {
      console.log(res);
      this.setState({
        superherosToDisplay: res.data
      })
    })
  }

  editSuperhero() {
    let promise = axios.put(`/powerful/superheros/${this.state.userInputTitle}`,{powers:this.state.userInputPowers});
    promise.then(res => {
      this.setState({
        superherosToDisplay: res.data
      })
    })
  }

  deleteSuperhero() {
    let promise = axios.delete(`/powerful/superheros/${this.state.userInputTitle}`);
    promise.then(res=> {
      this.setState({
        superherosToDisplay: res.data
      })
    })
  }

  updateUserInputTitle(val) {
    this.setState({
      userInputTitle:val
    })
  }

  updateUserInputPowers(val) {
    console.log('userInputPowers is currently', this.userInputPowers)
    this.setState({
      userInputPowers:val
    })
  }
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

  render() {
    return (
      <div className = 'fullScreen'>
        <div className="App">
          <input value = {this.state.userInputTitle} onChange = {e => this.updateUserInputTitle(e.target.value)} type = "text"></input>
          <input value = {this.state.userInputPowers} onChange = {e => this.updateUserInputPowers(e.target.value)} type = "text"></input>
          <button onClick={() => this.getSuperheros()}>Show All Superheros</button>
          <button onClick={() => this.addSuperhero()}>Add Superhero</button>
          <button onClick={() => this.editSuperhero()}>Edit SuperHero</button>
          <button onClick={() => this.deleteSuperhero()}>Delete Superhero</button>
          {this.displaySuperHeros()}
        </div>
      </div>
    );
  }
}

export default App;
