import React, { Component } from 'react';
import axios from 'axios';
import MeditationBefore from './MeditationBefore';
import MeditationVideo from './MeditationVideo';
import MeditationAfter from './MeditationAfter';




 class MeditationController extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      step: 1, 
      before: "",
      after: ""    
    }
   
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1 
    })
  }

  prevStep = ()=> {
    const { step } = this.state
    this.setState({
      step: step - 1 
    })
  }

  //weird syntax?
  handleChange = input => event => {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit= (event) => {
    event.preventDefault();
    const {
      before,
      after
    } = this.state 

    axios.post("http://localhost:3001.com/meditationBefore",{
      user: {
        before: before,
        user_id: this.props.user.id,
        user_email: this.props.user.email
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      console.log("posting meditaiton before response", response)
      this.props.history.push("/projectlogs");
     // add error handling here
    }).catch( err => {
      console.log("posting log error", err)
    });

    
  }

  renderSwitch = (step, values) => {
    switch(step) {
      case 1: return (
        <div> 
          <MeditationBefore 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        </div> 
      )
      case 2: return(
        <div> 
        <MeditationVideo 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      </div> 
      )
      case 3: return(
        <div>
        <MeditationAfter 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          handleSubmit={this.handleSubmit}
          /> 
        </div>
      )
      
    }
  }



  render(){

    const { step, bugTitle,bugDescription,languagesInvolved,links,solution,notes} = this.state;
    const values = { bugTitle,bugDescription,languagesInvolved,links,solution,notes}
    return (
      <div> 
      {this.renderSwitch(step, values)} 
      </div>
    )

  }
}


 export default MeditationController;




