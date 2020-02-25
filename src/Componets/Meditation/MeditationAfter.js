
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const styles = {

};


class MeditationAfter extends Component  {
  
  render(){

    return(
      <div>
        <h3> How do you feel after your session?  </h3> 

        <form onSubmit={this.props.handleSubmit} >  
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
          type="after" 
          name="after" 
          placeholder="after" 
          value={this.props.after} 
          onChange={this.props.handleChange} 
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

export default withStyles(styles)(MeditationAfter)

