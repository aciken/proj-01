import { useState } from "react"
import OpenAI from "openai";
import './AiChat.css';
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";





const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY , dangerouslyAllowBrowser: true});

export function AiChat(){
  const history = useNavigate()
const location = useLocation();
const {id} = location.state;
const {tier} = location.state;


async function updateUsage(id) {
  const {usage} = location.state;
  const updatedUsage = usage + 1;
  try {
    const response = await axios.put("http://localhost:3000/updateUsage", { id, usage: updatedUsage });
    console.log("Usage updated successfully!", response.data);
    history("/logedPage",{state: {id: id, tier: tier, usage: updatedUsage}})
  } catch (error) {
    console.error("Failed to update usage:", error);
  }
}

// async function oneUsage(usage){
//   const updatedUsage = usage + 1;
//   try {
//     await axios.put("http://localhost:3000/logedPage", { usage: updatedUsage });
//     console.log("Usage updated successfully!");
//   } catch (error) {
//     console.error("Failed to update usage:", error);
//   }
// }



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
    // imageGen();
    setShowResult(true);
    console.log(url);
  updateUsage(id)
  }

  function handlePopup() {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  return(

    <div className="whole">
          {tier === "1" ? (
            <div>
              {/* Render this if `tier` is 1 */}
              <p>Tier is 1!</p>
            </div>
          ) : tier === "2" ? (
            <div>
              {/* Render this if `tier` is 2 */}
              <p>Tier is 2!</p>
            </div>
          ) : tier === "3" ? (
            <div>
              {/* Render this if `tier` is 3 */}
              <p>Tier is 3!</p>
            </div>
          ) : (
            <div>
              {/* Render this if `tier` is not 1, 2, or 3 */}
              <p>Tier is not defined!</p>
            </div>
          )}
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