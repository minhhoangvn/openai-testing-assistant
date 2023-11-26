import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Provide a sample code to sorting the list of number and alphabetic in ASC order" }],
      model: "gpt-3.5-turbo",
    });
    
    console.log(completion.choices[0]);
  }
  
  main();