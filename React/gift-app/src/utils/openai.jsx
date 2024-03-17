 // No need to import React-specific hooks in this utility file
 const baseUrl = 'https://api.openai.com/v1/chat/completions';

 export async function fetchRecommendations(formData) {
   const { age, gender, interests } = formData;
 
   const prompt = `Suggest gift ideas for a ${age}-year-old ${gender} who enjoys ${interests}.`;
 
   const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
 
   const headers = {
     'Content-Type': 'application/json',
     Authorization: `Bearer ${apiKey}`,
   };
 
   const data = JSON.stringify({
     model: 'text-davinci-003',  
     prompt,
     max_tokens: 150, 
     n: 3,  
     stop: null,  
     temperature: 0.7,  
   });
 
   try {
     const response = await fetch(baseUrl, {
       method: 'POST',
       headers,
       body: data,
     });
 
     if (!response.ok) {
       throw new Error(`API request failed with status ${response.status}`);
     }
 
     const responseData = await response.json();
     return responseData;
   } catch (error) {
     throw error;
   }
 }
 export default fetchRecommendations ;