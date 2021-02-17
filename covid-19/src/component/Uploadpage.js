import React from 'react'
import './Uploadpage.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import UploadImg from '../Image/cloud-computing.png'

class Uploadpage extends React.Component{
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
      }
      
      onSubmit(){
        return (
                this.props.history.push("/drag")
                )
      }
    render(){
        return (
            <div className="Box">
                <div className="header2">
                    <h1>
                    COVID-19 Detection from X-ray with Machine Learning
                    </h1>
                </div>
                <div className="InfoBox">
                    <span className="Info">Upload your X-ray image</span>
                    <Button
                        variant="contained"
                        color= "default"
                        className="button"
                        size="large"
                        onClick={this.onSubmit}
                        >
                        NEXT >
                    </Button>
                    <span className="Describe">You can add your chest X-ray images up to 50 images.  </span>
                </div>
                <Box className="contact-us2">
                    <span>Contact us:<br/>
                    6010502659 Metaporn Thongthae         (metaporn.t@ku.th)<br/>
                    6010504791 Phimpirrudth Wheesetchaiya   (phimpirrudth.w@ku.th)
                    </span>
                </Box>
            </div>
        )
    }
} 
export default Uploadpage;