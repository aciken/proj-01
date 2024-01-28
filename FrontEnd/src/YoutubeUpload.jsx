import './YoutubeUpload.css';
import { useState } from "react";

export function YoutubeUpload() {

    const [form, setForm] = useState({
    title:"",
    description:"",
    file:null
    })

    const handleChange = (e) => {
    const inputValue = e.target.name === "file" ? e.target.files[0] : e.target.value
    
    setForm({
        ...form,
        [e.target.name]:inputValue
})
    }

const handleSubmit = (e) => {
    e.preventDefault();

    console.log({form})
}

    return(
        <div className="youtube-upload">
            <h1>Upload Your Video</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} type="text" name="title" placeholder="Title" />
                </div>
                <div>
                    <textarea onChange={handleChange} name="desription" id="" cols="30" rows="10" placeholder="Description"></textarea>
                </div>
                <div>
                    <input onChange={handleChange} accept='video/mp4' type="file" name="file" placeholder="Add Video File"/>
                </div>
                <button type="submit">Upload Video</button>
            </form>
        </div>
    )
}