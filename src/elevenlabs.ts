import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // ID голоса (можно изменить)
const OUTPUT_FILE = "elevenlabs_output.mp3"; // Файл для сохранения

async function synthesizeSpeech(text: string) {
    if (!ELEVENLABS_API_KEY) {
        console.error("Ошибка: API-ключ не найден в .env");
        return;
    }

    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
    const headers = {
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY,
    };
    const data = {
        text,
        model_id: "eleven_multilingual_v2", // Поддерживает арабский язык
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
        },
    };

    try {
        const response = await axios.post(url, data, { headers, responseType: "arraybuffer" });

        fs.writeFileSync(OUTPUT_FILE, response.data);
        console.log(`✅ Аудиофайл сохранен как ${OUTPUT_FILE}`);
    } catch (error) {
        console.error("❌ Ошибка при запросе к ElevenLabs API:", error);
    }
}

// Тестовый вызов функции
synthesizeSpeech("مرحبًا، كيف حالك؟");
