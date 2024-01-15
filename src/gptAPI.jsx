require('dotenv').config()
import OpenAI from "openai";


const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);




export const gptFunct = async () => {

    const prompt = "Tell me a joke about cat eating pasta.";

    const response = await openai.openaiComoletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_Tokens: 60,
        temperature: 1,
    })

    console.log(response.data);

}






