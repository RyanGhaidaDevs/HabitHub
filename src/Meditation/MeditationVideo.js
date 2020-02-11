
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import YouTube from 'react-youtube';


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

class MeditationVideo extends Component  {
 
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  render(){

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const {values, handleChange} = this.props;
    const { classes } = this.props;

    return(
      <div>
        <YouTube
          className="youtube"
          videoId="jPpUNAFHgxM"
          opts={opts}
          onReady={this._onReady}
        />   

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

export default withStyles(styles)(MeditationVideo)

 