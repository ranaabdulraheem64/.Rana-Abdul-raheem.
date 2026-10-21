import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      const formattedMessages = messages.map((m: any) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      const modelStream = await ai.models.generateContentStream({
        model: 'gemini-3.8-flash',
        contents: formattedMessages,
      });

      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      for await (const chunk of modelStream) {
        res.write(chunk.text);
      }
      res.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate response' });
    }
  });

  if (isProd) {
    app.use(express.static('dist'));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
