import React from "react"
import Box from '@material-ui/core/Box';
import exampleresult from '../Image/exampleresult.jpg'
import './Resultpage.css'
import Button from '@material-ui/core/Button';
import DragDrop from '../imageUploader/DragDrop'

class Resultpage extends React.Component{
    render(){
        
        return(
            <div className="body">
                <div>
                    <h1 className="header-result">
                        COVID-19 Detection from X-ray with Machine Learning
                        </h1>
                </div>
                <div className="report-box">
                    <img src={exampleresult} className="result-pics" />
                    <h1 className="result-report">
                        POSITIVE 80%
                    </h1>
                </div>
                <div className="result-download-button">
                    <Button
                        variant="contained"
                        color= "default"
                        className="button"
                        size="large"
                        // onClick={onSubmit}
                        >
                          RESULT
                        </Button>
                </div>
                <div>
                    <h1 className="download-des">
                    download analysis result here!
                    (Your result is .xls format report)
                    </h1>
                </div>
                <Box className="contact-res">
                    <span>Contact us:<br/>
                        6010502659 Metaporn Thongthae         (metaporn.t@ku.th)<br/>
                        6010504791 Phimpirrudth Wheesetchaiya   (phimpirrudth.w@ku.th)
                    </span>
                </Box>
            </div>
        )
    }

}
export default Resultpage;