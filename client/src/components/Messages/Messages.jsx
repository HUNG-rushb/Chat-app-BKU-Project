import React, { useRef, useState } from 'react';
import './Messages.css';
import { Send } from 'react-bootstrap-icons';
import UserMessage from './UserMessage.jsx';
import UserReverseMessage from './UserReverseMessage.jsx';
import { CardImage } from 'react-bootstrap-icons';
import ContentEditable from 'react-contenteditable';

const Messages = ({ userCardDetail }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageUrl = event.target.result;
      const newImage = new Image();
      newImage.src = imageUrl;
      setContent(imageUrl);
    };
    reader.readAsDataURL(file);
    setSelectedFile(file);
  };

  const isImage = (str) => {
    return str.includes('data:image/jpeg;base64');
  };

  const renderContent = () => {
    if (isImage(content)) {
      return `<img src="${content}" alt="Preview" style="max-width: 100%; max-height: 150px;" />`;
    } else {
      return content;
    }
  };

  const handleSendMessage = () => {
    setContent('');
  };

  return (
    <div className="messages-container">
      <div className="message-content">
        {userCardDetail.messages.map((item, index) => {
          if (item.userId === 1) {
            return <UserMessage key={index} item={item} />;
          } else return <UserReverseMessage key={index} item={item} />;
        })}
      </div>

      <div className="input-message-text">
        <div className="upload-image-input">
          <CardImage size={28} onClick={handleFileSelect} color="#f8ad9d" />
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
        <ContentEditable
          html={renderContent()}
          onChange={(e) => setContent(e.target.value)}
          tagName="div"
          id="content-edit"
        />
        <div className="send-message-icon" onClick={handleSendMessage}>
          <Send size={25} onClick={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
