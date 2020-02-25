
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




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


class MeditationBefore extends Component  {


  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }


  render(){

    const {values, handleChange} = this.props;
    const { classes } = this.props;

    return(
      <div>
        <h3> Write a few words below explaining how you feel before you begin your session: </h3> 
        <form onSubmit={this.handleSubmit} > 
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
          type="before" 
          name="before" 
          placeholder="how are you feeling today" 
          value={this.props.before} 
          onChange={this.props.handleChange} 
          required 
        />

      
        </form>

        <Button 
          label="continue"
          primary={true}
          margin='15'
          onClick={this.continue}
          className={classes.Continue}
          > Continue </Button>
      </div>
    )
  }
}

export default withStyles(styles)(MeditationBefore)

