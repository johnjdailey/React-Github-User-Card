import React, { Component } from 'react';
import './App.css';
import UserCard from "./components/userCard";

class App extends Component {
  state = {
    userData: {},
    followers: [],
  };


  componentDidMount() {
    fetch("https://api.github.com/users/b-marshall218")
      .then(res => res.json()) //what does this line do?
      .then(res => {
        console.log("user data", res)
        this.setState({ userData: res })
      })
      .catch(err => {
        console.log("first fetch error", err)
      })
    fetch("https://api.github.com/users/b-marshall218/followers")
      .then(res => res.json()) //what does this line do?
      .then(res => {
        console.log("followers", res)
        this.setState({ followers: res })
      })
      .catch(err => {
        console.log("second fetch error", err)
      })
  }
  render() {
    console.log("render log", this.state.followers)
    return (
      <div className="App" >
        <h1>Brian's GitHub</h1>
        <UserCard userData={this.state.userData} followers={this.state.followers} />

      </div>
    );
  }

}

export default App;


// {this.state.followers.map((userData) => {
//   return <userCard userData={userData} />
// })
// }