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
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)',
    margin: 15

  },
  };


class Journal extends Component  {
  constructor(props) {
    super(props);
      this.state = {
        journal: "", 
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
      journal
    } = this.state 

    axios.post("http://localhost:3001/journal", {
      user: {
        journal: journal,
        user_id: this.props.userId
      }
    }, 
    { withCredentials: true }
    ).then( response => console.log(response))
  }



  render(){

    const {values, handleChange} = this.props;
    const { classes } = this.props;

    return(
      <div>
        <h1> Journal </h1>
        <form onSubmit={this.handleSubmit} > 
         
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
          type="journal" 
          name="journal" 
          placeholder="journal" 
          value={this.state.journal} 
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

export default withStyles(styles)(Journal)

