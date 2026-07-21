import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

app.post("/api/parse-questions", async (req, res) => {
  try {
    const { rawText, subjectId, topicId, lawReference } = req.body;
    if (!rawText) {
      return res.status(400).json({ error: "Missing rawText" });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const prompt = `Parse the following raw text into a list of multiple-choice questions.

Raw text:
${rawText}

For each question, identify:
- The question statement (do not include the answer key/gabarito in the statement).
- The article or subtopic it refers to (if any, e.g., "Art. 1", "Tópico X"). If not explicitly mentioned, use "Questão Geral".
- The options (usually A, B, C, D, E).
- The correct option index (0 for A, 1 for B, 2 for C, etc.).
- A brief explanation for the correct answer, starting with "[Gabarito Letra X]".

Return the output strictly in the specified JSON schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              articleOrSubtopic: { type: Type.STRING },
              statement: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctOptionIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["articleOrSubtopic", "statement", "options", "correctOptionIndex", "explanation"]
          }
        }
      }
    });

    const jsonStr = response.text?.trim() || "[]";
    let parsedQuestions = JSON.parse(jsonStr);

    // Add remaining required fields
    parsedQuestions = parsedQuestions.map((q: any, index: number) => ({
      id: `custom-${Date.now()}-${index}`,
      subjectId: subjectId || "conhecimentos_gerais",
      topicId: topicId || "custom",
      lawReference: lawReference || "",
      ...q
    }));

    res.json({ questions: parsedQuestions });
  } catch (error) {
    console.error("Error parsing questions:", error);
    res.status(500).json({ error: "Failed to parse questions" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
