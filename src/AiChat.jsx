import { useState } from "react"
import OpenAI from "openai";



export function AiChat(){

    const API_KEY = "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";

const [chat, setChat] = useState("")
const [response, setResponse] = useState("")


const APIBody = {
    "model": "gpt-3.5-turbo",
    "max_tokens": 60,
    "temperature": 0.9,
    "top_p": 1,
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "What is the best youtube video title for a video with this description" + chat
        }
    ],
}

async function callOpenAIAPI() {
    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
}).then((data) =>{
    return data.json()
}).then((data) =>{
    console.log(data)
    console.log(data.choices[0].message.content)
})  


  console.log(response);

}



    return(
<div className="whole">
            <div>
                <textarea
                onChange={(event)=>setChat(event.target.value)} 
                placeholder="What is your video about?"
                cols="30"
                rows="10" />
            </div>
            <div>
                <button onClick={callOpenAIAPI}>Submit</button>
            </div>

</div>
    )
}