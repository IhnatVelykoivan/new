import AWS from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const polly = new AWS.Polly();

async function synthesizeSpeech(text: string) {
    const params = {
        OutputFormat: "mp3",
        Text: text,
        VoiceId: "Zeina",
        LanguageCode: "ar-SA",
    };

    try {
        const response: any = await polly.synthesizeSpeech(params).promise();

        if (response.AudioStream) {
            let audioBuffer;

            // Преобразование AudioStream в Buffer
            if (response.AudioStream instanceof Buffer) {
                audioBuffer = response.AudioStream;
            } else if (response.AudioStream instanceof Uint8Array) {
                audioBuffer = Buffer.from(response.AudioStream);
            } else if (response.AudioStream instanceof Blob) {
                audioBuffer = Buffer.from(await response.AudioStream.arrayBuffer());
            } else {
                throw new Error("Неподдерживаемый формат AudioStream");
            }

            fs.writeFileSync("polly_output.mp3", audioBuffer);
            console.log("Аудиофайл сохранен как polly_output.mp3");
        } else {
            console.error("Ошибка: отсутствует AudioStream");
        }
    } catch (error) {
        console.error("Ошибка при синтезе речи:", error);
    }
}

// Запуск с тестовой фразой
synthesizeSpeech("مرحبًا، كيف حالك؟");
