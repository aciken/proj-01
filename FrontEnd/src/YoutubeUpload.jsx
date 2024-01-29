import './YoutubeUpload.css';
import { useState } from "react";
import axios from "axios";


export function YoutubeUpload() {

    const [form, setForm] = useState({
    title:"",
    description:"",
    file:null
    })

    const handleChange = (e) => {
        console.log(`Change event on ${e.target.name}`);
        const inputValue = e.target.name === "file" ? e.target.files[0] : e.target.value;
        console.log(`Input value:`, inputValue);
        
        setForm({
            ...form,
            [e.target.name]: inputValue
        });



    }



const handleSubmit = (e) => {
    e.preventDefault();

    const videoData = new FormData();

    console.log(`Title: ${form.title} || Description: ${form.description} || File: ${form.file}`)

    videoData.append("videoFile", form.file);
    videoData.append("title", form.title);
    videoData.append("description", form.description);



    axios.post("http://localhost:3000/upload", videoData)
    .then((res) => { 
        console.log(res.data);
    })
    .catch((err) => {
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Error Response Data:", err.response.data);
            console.log("Error Response Status:", err.response.status);
            console.log("Error Response Headers:", err.response.headers);
        } else if (err.request) {
            // The request was made but no response was received
            // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in Node.js
            console.log("Error Request:", err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
        }
        console.log("Error Config:", err.config);
    })
}

    return(
        <div className="youtube-upload">
            <h1>Upload Your Video</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <input onChange={handleChange} type="text" name="title" placeholder="Title" />
                </div>
                <div>
                    <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                </div>
                <div>
                <input onChange={handleChange} accept='video/mp4' type="file" name="file" placeholder="Add Video File"/>                </div>
                <button type="submit">Upload Video</button>
            </form>
        </div>
    )
}