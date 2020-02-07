import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


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
  componentWillMount(){
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
    axios.delete("http://localhost:3001/logged_in", {withCredentials: true}).catch(error => {
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
                <Home {...props} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
              </div> 
            )}
          /> 
        <Route 
            path={"/registration"} 
            render={ props => (
              <div> 
                <Registration {...props} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
          <Route 
            path={"/login"} 
            render={ props => (
              <div> 
                <Login {...props} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
        </Switch>
      </BrowserRouter> 
      
      </div>
    );
  }
}


