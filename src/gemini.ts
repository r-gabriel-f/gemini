import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });