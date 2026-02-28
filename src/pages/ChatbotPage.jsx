import React from 'react';
import Chat from '../components/chat/Chat';
import Sidebar from '../components/chat/Sidebar';
import '../components/chat/Chat.css';

const ChatbotPage = ({ theme, toggleTheme }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const [chats, setChats] = React.useState(() => {
        const savedChats = localStorage.getItem('chatbot_chats');
        if (savedChats) {
            return JSON.parse(savedChats);
        }
        return [{
            id: 1,
            title: 'New Conversation',
            messages: [
                { id: 1, text: "Xin chào, mình là Tiến Huỳnh. Muốn trao đổi gì với mình vào ngày hôm nay?", sender: "bot" }
            ]
        }];
    });

    const [currentChatId, setCurrentChatId] = React.useState(() => {
        const savedId = localStorage.getItem('chatbot_current_id');
        if (savedId) {
            return JSON.parse(savedId);
        }
        return 1;
    });

    React.useEffect(() => {
        localStorage.setItem('chatbot_chats', JSON.stringify(chats));
    }, [chats]);

    React.useEffect(() => {
        localStorage.setItem('chatbot_current_id', JSON.stringify(currentChatId));
    }, [currentChatId]);

    const createNewChat = () => {
        const emptyChat = chats.find(c => c.messages.length === 1 && c.messages[0].sender === 'bot');
        if (emptyChat) {
            setCurrentChatId(emptyChat.id);
            if (window.innerWidth <= 768) {
                setIsSidebarOpen(false);
            }
            return;
        }

        const newId = Date.now();
        const newChat = {
            id: newId,
            title: 'New Conversation',
            messages: [
                { id: 1, text: "Xin chào, mình là Tiến Huỳnh. Muốn trao đổi gì với mình vào ngày hôm nay?", sender: "bot" }
            ]
        };
        setChats(prev => [newChat, ...prev]);
        setCurrentChatId(newId);
        if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        }
    };

    const updateChatMessages = (id, updaterFunction) => {
        setChats(prevChats => prevChats.map(chat => {
            if (chat.id === id) {
                const newMessages = typeof updaterFunction === 'function' ? updaterFunction(chat.messages) : updaterFunction;
                let newTitle = chat.title;
                if (chat.title === 'New Conversation' && newMessages.length > 1) {
                    const firstUserMsg = newMessages.find(m => m.sender === 'user');
                    if (firstUserMsg) {
                        newTitle = firstUserMsg.text.slice(0, 30) + (firstUserMsg.text.length > 30 ? '...' : '');
                    }
                }
                return { ...chat, messages: newMessages, title: newTitle };
            }
            return chat;
        }));
    };

    const currentChatMessages = chats.find(c => c.id === currentChatId)?.messages || [];

    return (
        <div className={`app-layout ${theme}`}>
            <Sidebar
                chats={chats}
                currentChatId={currentChatId}
                setCurrentChatId={setCurrentChatId}
                createNewChat={createNewChat}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                theme={theme}
            />
            <Chat
                chatId={currentChatId}
                messages={currentChatMessages}
                setMessages={updateChatMessages}
                theme={theme}
                toggleTheme={toggleTheme}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
        </div>
    );
};

export default ChatbotPage;
