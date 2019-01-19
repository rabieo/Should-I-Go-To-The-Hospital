import React, { Component } from "react";
import QuestionPage from "./components/QuestionPage/questionPage";
import InfoPage from "./components/InfoPage/infoPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // this json object contains all the questions, all the info text, the current info displayed,
    // the current question displayed and showcomponent which can be '0' to show info or '1' to show question
    this.state = {
      showComponent: 1,
      currentInfo: 0,
      currentQuestion: 0,
      questions: [
        { quest: "Are you suffering from a life threatening injury and/or in need immediate medical attention?", id: 0 },
        { quest: "Did you lose conscious or sustain a head injury?", id: 1 },
        { quest: "Are you having troubles breathing?", id: 2 },
        { quest: "Do you have severe pain or sudden loss of feeling?", id: 3 },
        { quest: "Did you sustain a minor non-life threatening injury?", id: 4 },
        { quest: "Are you in need of stiches?", id: 5 },
        { quest: "Are you experiencing persistent high fevers?", id: 6 },
        { quest: "Do you have a family doctor?", id: 7 }
      ],
      info: [
        {
          info:
            "The symptoms you outlined require immediate medical attention. If you are unable to physically go to your local Emergency Room please dial 911 and outline your symptoms. Hamilton Emergency Room wait times and information can be found here: https://www.hqontario.ca/System-Performance/Time-spent-in-emergency-departments ",
          answer: "YES you should go to the ER"
        },
        {
          info:
            "The symptoms you outlined require urgent care but are non-life threatening. Urgent care treats non-life threatening injuries and illnesses and offers eye care, labs, stitches, casts and x-rays (location may vary). Hamilton Urgent Care information can be found here: http://www.hamiltonhealthsciences.ca/body.cfm?ID=2109 Thank you! By choosing to go to URGENT CARE you are not contribute to the overcrowding of hospitals that affect the wait times for those with life threatening injuries/illnesses. ",
          answer: "NO you should go to URGENT CARE"
        },
        {
          info:
            "Your symptoms outlined do not require immediate medical attention. Walk in clinics provide medical care to patients who do not have a family doctor or are unable to reach them. You do not have to make an appointment to go to a walk in clinic. Hamilton Walk in Clinic information can be found here:  https://www.southwesternontario.ca/news-static/3905682-hamilton-area-walk-in-clinics/ Thank you! By choosing to go to a WALK IN CLINIC you are not contribute to the overcrowding of hospitals that affect the wait times for those with life threatening injuries/illnesses. ",
          answer: "NO you should go to a WALK IN CLINIC"
        },
        {
          info:
            "Your symptoms are non-life threatening and do not require immediate medical attention. Please make an appointment to see you family doctor. Hamilton Family Health Teams: https://www.hamiltonfht.ca/en/index.aspx Thank you! By choosing to go to your FAMILY DOCTOR you are not contribute to the overcrowding of hospitals that affect the wait times for those with life threatening injuries/illnesses.",
          answer: "NO you should make an appointment with you FAMILY DOCTOR"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="topnav border-bottom">
          <h1>Should I Go To The Hospital?</h1>
        </div>
        <div className="mainPage">
          {this.state.showComponent ? (
            <QuestionPage
              string={this.state.questions[this.state.currentQuestion].quest}
              handleYes={this.handleYes}
              handleNo={this.handleNo}
              id={this.state.questions[this.state.currentQuestion].id}
            />
          ) : (
            <InfoPage
              info={this.state.info[this.state.currentInfo].info}
              answer={this.state.info[this.state.currentInfo].answer}
            />
          )}
          <div className="restart">
            <button
              className="btn btn-danger"
              onClick={this.handleRestart}
            >
              restart
            </button>
          </div>
          <div className="emergency">
            <p>Always call 911 for medical Emergencies </p>
          </div>
        </div>
      </div>
    );
  }


// this function handles clicking on button Yes, it checks the current question
// and based on that, shows the correct info page by changing current info and show component.
  handleYes = e => {
    if (e.target.id == 0 || e.target.id == 1 || e.target.id == 2 || e.target.id == 3) {
      this.setState({ currentInfo: 0, showComponent: 0 });
    }
    if (e.target.id == 4 || e.target.id == 5 || e.target.id == 6) {
      this.setState({ currentInfo: 1, showComponent: 0 });
    }
    if (e.target.id == 4 || e.target.id == 5 || e.target.id == 6) {
      this.setState({ currentInfo: 2, showComponent: 0 });
    }
    if (e.target.id == 7) {
      this.setState({ currentInfo: 3, showComponent: 0 });
    }
  };

// this function handles clicking on button No, it checks the current question
// and based on that, goes to the next question by changing current question.
  handleNo = e => {
    if (e.target.id < 7) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
    else {
      this.setState({ currentInfo: 2, showComponent: 0 });
    }
  };


// this function handles clicking on button reset, it goes to the first question by changing 
// currentQuestion to zero.
  handleRestart = () => {
    this.setState({ currentQuestion: 0, showComponent: 1});
  }
}

export default App;
