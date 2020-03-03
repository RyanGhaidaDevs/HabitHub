import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
        <Button 
          primary="true"
          margin='15'
          onClick={()=> this.props.history.push("/meditation")}
          > New Meditation 
          </Button>
          <Button 
          primary="true"
          margin='15'
          onClick={()=> this.props.history.push("/journal")}
          > New Journal 
          </Button>
          <Button 
          primary="true"
          margin='15'
          onClick={()=> this.props.history.push("/coldShower")}
          > Cold Shower 
          </Button>
          <Button 
          primary="true"
          margin='15'
          onClick={()=> this.props.history.push("/deepBreathing")}
          > Deep Breathing
          </Button>

      </div>
    )
  }
}

export default withStyles(styles)(Home)

 