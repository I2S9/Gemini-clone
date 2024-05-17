const apiKey = "AIzaSyCgbdDzk5iBJDMk-dcNvyM7k9wsAihZctc";

const{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai")

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "YOUR_API_KEY";

async function runChat(){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({model: MODEL_NAME})

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        top1: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        
    ]
}