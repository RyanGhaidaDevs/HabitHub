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
      after: "", 
      user_id: ""    
    }
   
  }

  componentDidMount(){
    console.log(this.props)

    this.setState({
      user_id: this.props.userId
    })
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
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state)  
  }


  handleSubmit= (event) => {
    event.preventDefault();
    const {
      before, 
      after,
      user_id,
    } = this.state 



    axios.post("http://localhost:3001/meditation",{
      user: {
        before: before,
        after: after,
        user_id: user_id,
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      console.log("posting meditaiton  response", response)
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
            userId={this.props.userId}
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
          values={values}
        />
      </div> 
      )
      case 3: return(
        <div>
        <MeditationAfter 
          userId={this.props.userId}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          /> 
        </div>
      )
      default:
      
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




