import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login'; 
import Home from './Home';
import NavBar from './NavBar';
import MeditationController from './Meditation/MeditationController';
import Journal from './Journal';
import ColdShower from './ColdShower';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},

    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }
  //switch to componetDidMount after working.
  componentDidMount(){
    this.checkLoginStatus();
  }

  checkLoginStatus(){
    axios.get("http://localhost:3001/logged_in", {withCredentials: true}).then(response => {
      if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("login error:", error)
    })
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).catch(error => {
      console.log("logout error:", error)
    })
  }


  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
        <Redirect from="/" exact to="/home" />
        <Route 
            path={"/home"} 
            render={ props => (
              <div> 
                <NavBar {...props}   handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <Home {...props}   userId={this.state.user.id} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
              </div> 
            )}
          /> 
        <Route 
            path={"/registration"} 
            render={ props => (
              <div> 
                <NavBar {...props}   handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <Registration {...props} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
          <Route 
            path={"/login"} 
            render={ props => (
              <div> 
                <NavBar {...props}   handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <Login {...props} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
          <Route 
            path={"/meditation"} 
            render={ props => (
              <div> 
                <NavBar {...props}   handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <MeditationController {...props} userId={this.state.user.id} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
          <Route 
            path={"/journal"} 
            render={ props => (
              <div> 
                <NavBar {...props}   handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <Journal {...props} userId={this.state.user.id} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
           <Route 
            path={"/coldShower"} 
            render={ props => (
              <div> 
                <NavBar {...props}   handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <ColdShower {...props}  userId={this.state.user.id} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
        </Switch>
      </BrowserRouter> 
      
      </div>
    );
  }
}


