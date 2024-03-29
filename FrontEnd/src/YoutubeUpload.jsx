import './YoutubeUpload.css';
import { useEffect, useState } from "react";
import axios from "axios";
import OpenAI from "openai";


const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY , dangerouslyAllowBrowser: true});

export function YoutubeUpload() {

    const [form, setForm] = useState({
    title:"",
    description:"",
    file:null,
    thumbnail:null
    })

    const [response, setResponse] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");


    async function main1(chat) {

        const completion = await openai.chat.completions.create({
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "Make short and attention grabbing YouTube title for video with this description" + chat},
            ],
            model: "gpt-3.5-turbo",
        });


        setResponse(completion.choices[0].message.content);



    }


    
    async function main2(wordNum, chat) {

        const completion = await openai.chat.completions.create({
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "Make youtube video description with"+ wordNum+ " words from this short description" + chat},
            ],
            model: "gpt-3.5-turbo",
        });


        setDescription(completion.choices[0].message.content);

 
        console.log(completion.choices[0].message.content);



    }
    
      async function imageGen(chat){
        console.log('imageGen called')
        const image = await openai.images.generate({ model: "dall-e-3", prompt: "Make youtube thumbnail from this video description " + chat, n:1,size: "1792x1024", });
        setUrl(image.data[0].url);

        const response = await axios.get(image.data[0].url, { responseType: 'arraybuffer' });
        const decoder = new TextDecoder('binary');
        const binaryString = decoder.decode(response.data);


console.log(binaryString)
        console.log(url)
      }



    const handleResponseChange = (e) => {
        console.log(`Change event on ${e.target.name}`);
        const inputValue = e.target.value;
        console.log(`Input value:`, inputValue);
        
        setResponse(inputValue);
    }

    const handleDescriptionChange = (e) => {
        console.log(`Change event on ${e.target.name}`);
        const inputValue = e.target.value;
        console.log(`Input value:`, inputValue);
        
        setDescription(inputValue);
    }

    const handleChange = (e) => {
        console.log(`Change event on ${e.target.name}`);
        const inputValue = e.target.name === "file" ? e.target.files[0] : e.target.value;
        console.log(`Input value:`, inputValue);
        
        setForm({
            ...form,
            [e.target.name]: inputValue
        });
    }

    const handleThumbnailChange = (e) => {
        console.log(`Change event on thumbnail`);
        const thumbnailFile = e.target.files[0];
        console.log(`Thumbnail file:`, thumbnailFile);
        
        setForm({
            ...form,
            thumbnail: thumbnailFile
        });
    }



const handleSubmit = (e) => {
    e.preventDefault();

    const videoData = new FormData();

    console.log(`Title: ${form.title} || Description: ${form.description} || File: ${form.file} || Thumbnail: ${form.thumbnail}`)

    videoData.append("videoFile", form.file);
    videoData.append("title", response);
    videoData.append("description", description);
    videoData.append("thumbnail", form.thumbnail);

    console.log(`${videoData.thumbnail} || ${videoData.videoFile}`)


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

const handleSend = (e) => {
e.preventDefault();


const videoData = new FormData();

videoData.append("videoFile", form.file);

axios.post("http://localhost:3000/send", videoData)
    .then((res) => { 
        console.log(res.data);
        


main1(res.data);
main2(40, res.data);
// imageGen(res.data);



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
                    <input onChange={handleResponseChange} type="text" name="title" placeholder="Title" value={response} />
                </div>
                <div>
                    <textarea onChange={handleDescriptionChange} name="description" id="" cols="30" rows="10" placeholder="Description" value={description}></textarea>
                </div>
                <div>
                <input onChange={handleChange} accept='video/mp4' type="file" name="file" placeholder="Add Video File"/>
                </div>
                <div>
                    <input onChange={handleThumbnailChange} accept='image/jpeg' type="file" name="thumbnail" placeholder='Add Thumbnail File' />
                </div>
                <button type="submit">Upload Video</button>
                <button onClick={handleSend}>Send Video</button>
            </form>
            <img className="imageGen" src={url} alt="" />
        </div>
    )
}