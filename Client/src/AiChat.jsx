import { useState } from "react"
import OpenAI from "openai";
import './AiChat.css';




export function AiChat(){

    const API_KEY = "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";

const [chat, setChat] = useState("")
const [response, setResponse] = useState("");
const [description, setDescription] = useState("")


async function callOpenAIAPI() {
    // First API call
    const APIBody1 = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Give me best possible youtube title for video with this description" + chat
            }
        ]
    };

    const response1 = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody1)
    });

    const data1 = await response1.json();
    setResponse(data1.choices[0].message.content);
    console.log('Title:', response);

    // Second API call
    const APIBody2 = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Give me youtube description with hastagsthat is at least 60 words long" + chat
            }
        ]
    };

    const response2 = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody2)
    });

    const data2 = await response2.json();
    setDescription(data2.choices[0].message.content);
    console.log('Description:', description);

    // Third API call

    const APIBody3 = {
        "model": "dall-e-3",
        "prompt": "Video Thumbnai about " + chat,
        "n": 1,
        "size": "1024x1024"
    };
    
    const response3 = await fetch("https://api.openai.com/v1/images/generation", {
        method: "POST",
        headers:{
            'Access-Control-Allow-Origin': 'https://chat.openai.com',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody3)
    });
    
    const data3 = await response3.json();
    console.log('Image:', data3);
}



    return(
<div className="whole">
            <div>
                <textarea
                className="chat-place"
                onChange={(event)=>setChat(event.target.value)} 
                placeholder="What is your video about?"
                cols="50"
                rows="10" />
            </div>
            <div>
                <button className="sub-chat" onClick={callOpenAIAPI}>Submit</button>
            </div>
                <div>
                    <p>{response}</p>
                    <p>{description}</p>
                </div>

    

</div>
    )
}