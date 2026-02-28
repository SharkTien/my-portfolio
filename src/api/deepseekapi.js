import { RAG_SYSTEM_PROMPT } from './systemPrompt';

const apiKey = import.meta.env.VITE_ROUTER_API_KEY || import.meta.env.VITE_OPENROUTER_API_KEY;

export async function chatWithDeepSeek(prompt, messagesHistory = [], onProgress) {
    try {
        const formattedHistory = messagesHistory
            .filter(msg => msg.id !== 1)
            .map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'bot',
                content: msg.text
            }));

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": window.location.href,
                "X-Title": "Soi long cua Tien Huynh",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "arcee-ai/trinity-large-preview:free",
                messages: [
                    { role: "system", content: RAG_SYSTEM_PROMPT },
                    ...formattedHistory,
                    { role: "user", content: prompt }
                ],
                stream: true
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
                        const data = JSON.parse(line.slice(6));
                        const content = data.choices[0]?.delta?.content || "";
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
        console.error("OpenRouter Fetch API error:", error);
        throw error;
    }
}
