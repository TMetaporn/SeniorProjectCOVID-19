import React from 'react';
import './home.css';
import { Link, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Xray from "../Image/x-ray.png";

class Home extends React.Component{  
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onSubmit(){
    return (
            this.props.history.push("/upload")
            )
  }
 render(){
   return (
    <div className="App-home">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <h1 className="header-home">
        COVID-19 Detection from X-ray with Machine Learning
      </h1>
      <div className="Information">
        <img src={Xray} className="Xray-image"/>
        <Box component="span" m={1} className = "Des-Box">
          <span>
            <h2 className="Pro-Info">Project Info.</h2>
            “COVID-19 Detection from X-ray with Machine Learning”
            is a 2020 Senior Project of “Computer Engineering Project Preparation (01204495),
            Department of Computer Engineering, Faculty of Engineering, Kasetsart University.
          </span>
        </Box>
      </div>
      <span className="Describe-text">
        This website is made to display the Covid-19 probability analysis of any chest X-ray images you uploaded.
        Click “START” below, to begin the process. 
      </span>
      <Button
        variant="contained"
        color= "default"
        className="button"
        size="large"
        onClick={this.onSubmit}
      >
        START
      </Button>
      <Box className="contact-us">
        <span>Contact us:<br/>
          6010502659 Metaporn Thongthae         (metaporn.t@ku.th)<br/>
          6010504791 Phimpirrudth Wheesetchaiya   (phimpirrudth.w@ku.th)
        </span>
      </Box>
      <div className="Icon-distributed">Icons made by 
          <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> 
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
    </div>
  );
 }
 
}
export default Home;