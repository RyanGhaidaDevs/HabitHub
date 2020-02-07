import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
          <Button style={ {fontSize: '14px'} } color="inherit" onClick={this.props.handleLogout}>
            Logout
          </Button> 
      </div>
    )
  }
}

export default withStyles(styles)(Home)

 