import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import {useDropzone} from "react-dropzone"
import Button from '@material-ui/core/Button';
import UploadImg from '../Image/cloud-computing.png'
import './DragDrop.css'


function  DragDrop(){
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept:"image/*",
        onDrop:(acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file)=>Object.assign(file,
                    {preview: URL.createObjectURL(file)}
                    )
                )
            )
        }
    })
    const history = useHistory();
    const onSubmit = () =>{ 
      history.push('/result');
    }
const images = files.map((file)=>(
    <div key={file.name} className="Preview-pic-header">
        <div>
            <img src={file.preview} style={{width:"200px"}} alt="preview" className="preview"/>
            <h1 className="Preview-pics">Picture {file.name} </h1>
        </div>
    </div>
))
        return(
            <div className="bg-box">
                <div className="title-box">
                    <h1 className="Title"> Drop your Image here </h1>
                </div>
                <div>
                    <div {...getRootProps()} className="Input-Box">
                        <input {...getInputProps()}/>
                    </div>
                </div>
                <div className="button-box">
                    <Button
                        variant="contained"
                        color= "default"
                        className="button"
                        size="large"
                        onClick={onSubmit}
                        >
                        <img src={UploadImg} className="UploadImg"/> UPLOAD
                    </Button>
                </div>
                <div >
                    <div className="Preview-box">
                        {images}
                    </div>
                </div> 
                <div className="Icon-distributed2">
                    Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        )
    }
export default DragDrop;