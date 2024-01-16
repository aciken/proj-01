import {main} from '/server-side/server.js'

export function AiChat(){


    const submitInput = (e) =>{
        e.preventDefault()
        const aiInput = document.querySelector(".ai-input");
        main(aiInput.value)

        aiInput.value = "";
    }


    return(

        <div>
            <h1>Chat with AI</h1>
            <form action="">
                <input className="ai-input" type="text" placeholder="Your Text"/>
                <button onClick={submitInput}>Submit</button>
            </form>
            <p className="Answer"></p>
        </div>
    )
}