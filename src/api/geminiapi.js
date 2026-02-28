import { RAG_SYSTEM_PROMPT } from './systemPrompt';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function chatWithGemini(prompt, messagesHistory = [], onProgress) {
    if (!apiKey) {
        throw new Error("Missing VITE_GEMINI_API_KEY. Please verify your .env.local file.");
    }

    try {
        const formattedHistory = messagesHistory
            .filter(msg => msg.id !== 1)
            .map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }));

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                systemInstruction: {
                    role: "user",
                    parts: [{ text: RAG_SYSTEM_PROMPT }]
                },
                contents: [
                    ...formattedHistory,
                    { role: "user", parts: [{ text: prompt }] }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let fullResponse = "";

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n");

            for (const line of lines) {
                if (line.startsWith("data: ") && line.trim() !== "data: [DONE]") {
                    try {
                        const dataUrl = line.slice(6);
                        // Gemini may return empty lines or malformed JSON if we don't trim
                        if (!dataUrl.trim()) continue;

                        const data = JSON.parse(dataUrl);
                        const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
                        if (content) {
                            fullResponse += content;
                            if (onProgress) {
                                onProgress(fullResponse);
                            }
                        }
                    } catch (e) {
                        // Ignore JSON errors from partial/empty chunks
                    }
                }
            }
        }

        return fullResponse;
    } catch (error) {
        console.error("Gemini Fetch API error:", error);
        throw error;
    }
}
