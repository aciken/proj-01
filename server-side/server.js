import dotenv from 'dotenv'
dotenv.config()

import { OpenAI } from 'openai';
const openai = new OpenAI(process.env.OPENAI_API_KEY);


async function main(content) {
  const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You ara a chat bot that givees me youtube video title'
            },
            {
                role: 'user',
                content: content
            },
        ],
    });

    console.log(response.choices[0].message.content);
}

export {main}