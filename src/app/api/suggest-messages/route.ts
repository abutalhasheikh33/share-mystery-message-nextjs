// import { openai } from '@ai-sdk/openai';
// import { streamText } from 'ai';
// import { NextResponse } from 'next/server';
// import OpenAI from 'openai';

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// export async function POST(req: Request) {
//     try{
//         const prompt =
//       "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

//         const result = await streamText({
//           model: openai('gpt-3.5-turbo'),
//           prompt,
//         });

//         return result.toAIStreamResponse();
//     }catch(error){
//         if(error instanceof OpenAI.APIError){
//             const { name,status,headers,message } = error;
//             return NextResponse.json({
//                 name,status,headers,message
//             }, {status})
//         }else{
//             console.log("Unexpected error occured")
//             throw error;
//         }
//     }


 
// }



import { google } from '@ai-sdk/google';
import { generateText,streamText } from 'ai';





export async function POST(req: Request) {
    try{
        const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

       
    const result = await streamText({
    model: google('models/gemini-pro'),
    prompt,
  });
    

    return result.toAIStreamResponse();
    }catch(error){
        
        
            console.log("Unexpected error occured",error)
            throw error;
        
    }


 
}