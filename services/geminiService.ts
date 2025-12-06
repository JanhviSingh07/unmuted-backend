import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, ensure process.env.API_KEY is defined.
// For this demo, we handle the case where it might be missing gracefully.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateMindfulnessTip = async (): Promise<string> => {
  if (!apiKey) {
    return "Take a deep breath. Focus on 3 things you can see, 2 things you can touch, and 1 thing you can hear.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a short, calming, and actionable mental health or mindfulness tip for a stressed university student. Keep it under 2 sentences.",
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Pause for a moment. Inhale for 4 seconds, hold for 4, and exhale for 4.";
  } catch (error) {
    console.error("Failed to generate tip:", error);
    return "Remember to drink some water and stretch your shoulders today.";
  }
};