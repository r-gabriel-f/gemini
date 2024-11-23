import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyDqMCwCtGtyNgfB_9vjEZWhuPmUoDCMo5U');

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });