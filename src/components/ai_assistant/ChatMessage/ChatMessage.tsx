import React from 'react';
// import styles from './ChatMessage.module.css';

interface ChatMessageProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'ai' | 'system'; // Added 'system' for potential system messages
    timestamp?: string; // Optional timestamp
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  // Basic styling based on sender can be added later
  return (
    <div className={`chat-message ${message.sender}`}> {/* Replace with CSS module later */}
      <p className="message-text">{message.text}</p>
      {message.timestamp && <span className="message-timestamp">{message.timestamp}</span>}
    </div>
  );
};

export default ChatMessage;
