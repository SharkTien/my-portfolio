import React, { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import BotLogo from '../../assets/—Pngtree—future intelligent technology robot ai_5766888.png'
import { Sun, Moon, Check, ChevronDown, ChevronUp, Menu } from 'lucide-react'
import { chatWithDeepSeek } from '../../api/deepseekapi'
import { chatWithGemini } from '../../api/geminiapi'


const Chat = ({ chatId, messages, setMessages, theme, toggleTheme, toggleSidebar }) => {

    const [isTyping, setIsTyping] = useState(false);
    const [input, setInput] = useState('');
    const [selectedModel, setSelectedModel] = useState('gemini');
    const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsModelDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const models = [
        { id: 'gemini', name: 'Gemini 1.5 Fast' },
        { id: 'deepseek', name: 'DeepSeek AI Smart' }
    ];

    const selectedModelName = models.find(m => m.id === selectedModel)?.name || 'Model';

    const handleInput = (e) => {
        setInput(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userInput = input.trim();
        const newUserMsg = { id: Date.now(), text: userInput, sender: 'user' };

        const botMsgId = Date.now() + 1;
        const botMsgPlaceholder = { id: botMsgId, text: '', sender: 'bot' };

        const activeChatId = chatId;

        setMessages(activeChatId, prev => [...prev, newUserMsg, botMsgPlaceholder]);
        setInput('');

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
        }

        setIsTyping(true);

        try {
            const chatAPI = selectedModel === 'gemini' ? chatWithGemini : chatWithDeepSeek;
            await chatAPI(userInput, messages, (streamedText) => {
                setIsTyping(false);
                setMessages(activeChatId, prev => prev.map(msg =>
                    msg.id === botMsgId ? { ...msg, text: streamedText } : msg
                ));
            });
        } catch (error) {
            console.error("Error generating response:", error);
            setIsTyping(false);
            setMessages(activeChatId, prev => prev.map(msg =>
                msg.id === botMsgId ? { ...msg, text: "I'm sorry, but I can't process your request right now." } : msg
            ));
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <button
                    className="hamburger-btn"
                    onClick={toggleSidebar}
                    aria-label="Open Sidebar"
                >
                    <Menu size={24} />
                </button>
                <div className="bot-avatar-container">
                    <img
                        src={BotLogo}
                        alt="AI Robot Avatar"
                        className="bot-avatar"
                    />
                </div>
                <div className="header-info">
                    <h2>Nexus AI</h2>
                    <span className="status-indicator">Systems Online</span>
                </div>

                <div className="model-dropdown-container" ref={dropdownRef}>
                    <button
                        className="model-dropdown-btn"
                        onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                        type="button"
                    >
                        {selectedModelName}
                        {isModelDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isModelDropdownOpen && (
                        <div className="model-dropdown-menu">
                            <div className="model-dropdown-header">Model</div>
                            {models.map(model => (
                                <div
                                    key={model.id}
                                    className={`model-dropdown-item ${selectedModel === model.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedModel(model.id);
                                        setIsModelDropdownOpen(false);
                                    }}
                                >
                                    <span>{model.name}</span>
                                    {selectedModel === model.id && <Check size={16} className="check-icon" />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
            <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                        {msg.sender === "bot" && (
                            <img
                                src={BotLogo}
                                alt="bot"
                                className="message-avatar"
                            />
                        )}
                        <div className={`message-bubble ${msg.sender}`}>
                            {msg.sender === 'bot' ? (
                                msg.text === '' ? (
                                    <div className="typing-indicator">
                                        <div className="typing-dot"></div>
                                        <div className="typing-dot"></div>
                                        <div className="typing-dot"></div>
                                    </div>
                                ) : (
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                )
                            ) : (
                                <p>{msg.text}</p>
                            )}
                        </div>
                    </div>
                ))}

                <div ref={messagesEndRef} />
            </div>
            <form className="chat-input-container" onSubmit={handleSend}>
                <div className="input-wrapper">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="chat-input"
                        rows={1}
                    />
                </div>
                <button type="submit" className="send-button" disabled={!input.trim()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Chat