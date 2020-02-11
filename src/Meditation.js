import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import YouTube from 'react-youtube';


const styles = {

};


class Meditation extends Component  {
  constructor(props) {
    super(props);
      this.state = {
        reps: 0, 
      }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const {
      reps
    } = this.state 

    axios.post("http://localhost:3001/reps", {
      user: {
        reps: reps,
        user_id: this.props.userId
      }
    }, 
    { withCredentials: true }
    ).then( response => console.log(response))
  }



  render(){

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return(
      <div>
         <h1> Meditation </h1>
        <form onSubmit={this.handleSubmit} > 
        <h3> Before </h3> 
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
          type="reps" 
          name="reps" 
          placeholder="Reps" 
          value={this.state.reps} 
          onChange={this.handleChange} 
          required 
        />
        <Button 
        label="submit"
        type="submit"
        primary={true}
        margin='25'
        variant="focus"
        size="small"
        style={
          {fontSize: 24,
            color: 'orange',
            padding: 10,
          } 
        }
        color="inherit"
        > Submit </Button>
        
        </form>

        <YouTube
          className="youtube"
          videoId="jPpUNAFHgxM"
          opts={opts}
          onReady={this._onReady}
        />

        <form onSubmit={this.handleSubmit} > 
        <h3> After </h3> 
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
          type="reps" 
          name="reps" 
          placeholder="Reps" 
          value={this.state.reps} 
          onChange={this.handleChange} 
          required 
        />
        <Button 
        label="submit"
        type="submit"
        primary={true}
        margin='25'
        variant="focus"
        size="small"
        style={
          {fontSize: 24,
            color: 'orange',
            padding: 10,
          } 
        }
        color="inherit"
        > Submit </Button>
        
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(Meditation)

 