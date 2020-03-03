import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';




const styles = {
  root: {
    background: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)'
  },
  Continue: {
    width: 125,
    color: "grey",
    border: "groove",
    background: "white",
    fontSize: 18,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)',
    margin: 15

  },
  };


class ColdShower extends Component  {
  constructor(props) {
    super(props);
      this.state = {
        minutes: "", 
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
      minutes
    } = this.state 

    axios.post("http://localhost:3001/shower", {
      user: {
        minutes: minutes,
        user_id: this.props.userId
      }
    }, 
    { withCredentials: true }
    ).then( response => console.log(response))
  }



  render(){


    return(
      <div>
        <h3> How many minutes did you endure the cold ! </h3>
        <form onSubmit={this.handleSubmit} > 
         
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
          type="minutes" 
          name="minutes" 
          placeholder="minutes" 
          value={this.state.minutes} 
          onChange={this.handleChange} 
          required 
        />
        <br/>
        <Button 
        label="submit"
        type="submit"
        primary={true}
        margin='25'
        variant="focus"
        size="small"
        style={
          {fontSize: 24,
            color: 'green',
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

export default withStyles(styles)(ColdShower)

