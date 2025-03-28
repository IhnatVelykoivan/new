import express from "express";
import dotenv from "dotenv";
import Ollama from "ollama";

dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

async function initializeOllamaModel() {
    try {
        console.log("Pulling Llama3 model...");
        await Ollama.pull({ model: 'llama3' });
        console.log("Llama3 model is ready.");
    } catch (error) {
        console.error("Failed to pull Llama3 model:", error);
        process.exit(1);
    }
}

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        console.log(`Received message: ${message}`);

        const ollamaResponse = await Ollama.chat({
            model: 'llama3',
            messages: [
                {
                    role: 'system',
                    content: 'Ты дружелюбный ИИ-ассистент. Всегда отвечай развернуто и на том языке, на котором тебе написали.'
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            stream: false
        });

        console.log("Ollama response:", ollamaResponse.message.content);

        res.json({
            response: ollamaResponse.message.content
        });

    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({
            error: "Server error",
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

// Initialize and start server
initializeOllamaModel().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });
});