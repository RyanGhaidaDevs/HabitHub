import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {

};


class Home extends Component  {
  constructor(props) {
    super(props);


  }

  render(){

    return(
      <div>
          <h1> home </h1>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

 