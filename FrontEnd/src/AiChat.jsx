import { useState } from "react"
import OpenAI from "openai";
import './AiChat.css';
import { useLocation } from "react-router-dom";





const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY , dangerouslyAllowBrowser: true});

export function AiChat(){
const location = useLocation();
const {id} = location.state;
console.log(id)


  const [showResult, setShowResult] = useState(false); 
  const [chat, setChat] = useState("");
  const [response, setResponse] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Add state for the pop-up


  async function main1() {
    const completion = await openai.chat.completions.create({
      messages: [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Make youtube title for video with this description" + chat},
      ],
      model: "gpt-3.5-turbo",
    });

    setResponse(completion.choices[0].message.content);
    console.log(completion.choices[0].message.content);
  }

  async function main2(wordNum) {
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

  async function imageGen(){
    const image = await openai.images.generate({ model: "dall-e-3", prompt: "Make youtube thumbnail from this video description " + chat, n:1,size: "1792x1024", });
    setUrl(image.data[0].url);
  }

  async function callOpenAIAPI() {
    main1();
    main2(40);
    imageGen();
    setShowResult(true);
    console.log(url);
  }

  function handlePopup() {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
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
      {showResult && (
        <div className="result-grid">
            <p onClick={() => {navigator.clipboard.writeText(response); handlePopup();}} className="youtube-title">{response}</p>
            <p onClick={() => {navigator.clipboard.writeText(description); handlePopup();}} className="youtube-desc">{description}</p>
          <img className="AIimg" src={url} alt="" />
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <p className="copy-popup">Copied to Clipboard</p>
        </div>
      )}
    </div>
  )
}