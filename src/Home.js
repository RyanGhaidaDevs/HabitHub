import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const styles = {

};


class Home extends Component  {
  constructor(props) {
    super(props);
      this.state = {
    
      }
  }


  render(){

    return(
      <div>
        <h1> home </h1>
        <Button 
          label="continue"
          primary={true}
          margin='15'
          onClick={()=> this.props.history.push("/meditation")}
          > New Meditation </Button>

       
      </div>
    )
  }
}

export default withStyles(styles)(Home)

 