export async function chatWithDeepSeek(prompt, messagesHistory = [], onProgress) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/deepseek`, {
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
