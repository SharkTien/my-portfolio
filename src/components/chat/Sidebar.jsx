import React from 'react';
import { MessageSquare, Plus, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ chats, currentChatId, setCurrentChatId, createNewChat, isSidebarOpen, setIsSidebarOpen, theme }) => {
    return (
        <>
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Link to="/" className="back-home-btn" style={{ color: 'var(--primary-color)' }}>
                            <ArrowLeft size={20} />
                        </Link>
                        <h2 style={{ color: 'var(--primary-color)' }}>Chat History</h2>
                    </div>
                    <button
                        className="close-sidebar-btn"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="sidebar-content">
                    <button className="new-chat-btn" onClick={createNewChat}>
                        <Plus size={18} />
                        <span>New Chat</span>
                    </button>

                    <div className="chat-list">
                        {chats.map(chat => (
                            <button
                                key={chat.id}
                                className={`chat-item-btn ${currentChatId === chat.id ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentChatId(chat.id);
                                    if (window.innerWidth <= 768) {
                                        setIsSidebarOpen(false);
                                    }
                                }}
                            >
                                <MessageSquare size={16} />
                                <span className="chat-title">{chat.title || 'New Conversation'}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
