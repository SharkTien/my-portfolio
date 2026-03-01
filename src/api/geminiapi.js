export async function chatWithGemini(prompt, messagesHistory = [], onProgress) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/gemini`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt,
                messagesHistory
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
