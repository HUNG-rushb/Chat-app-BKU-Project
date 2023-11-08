import React, { useCallback, useRef, useState } from 'react';
import { Send } from 'react-bootstrap-icons';
import { CardImage } from 'react-bootstrap-icons';
import ContentEditable from 'react-contenteditable';
import { handleChangeFile } from '../../hooks/useChangeFile';

const ChatInput = ({data, setData, handleSendMessage}) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');

  const handleFileSelect = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const isImage = (str) => {
    return str.includes('data:image/jpeg;base64');
  };

  const renderContent = useCallback(() => {
    if (isImage(content)) {
      // return `<img src="${content}" alt="Preview" style="max-width: 100%; max-height: 150px;" />`;
    } else {
      return content;
    }
  }, [content]);

  // const handleSendMessage = useCallback(() => {
  //   const newMessage = {
  //     userId: 1,
  //     message: content
  //   };
  //   data.push(newMessage);
  //   setData(data);
  //   setContent('');
  // }, [data, setData, content]);
  return (
    <div className="input-message-text">
      <div className="upload-image-input">
        <CardImage size={28} onClick={handleFileSelect} color="#f8ad9d" />
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          onChange={(event) =>
            handleChangeFile(event, setContent, setSelectedFile)
          }
        />
      </div>
      <ContentEditable
        html={renderContent()}
        onChange={(e) => setContent(e.target.value)}
        tagName="div"
        id="content-edit"
      />
      <div className="send-message-icon" onClick={handleSendMessage}>
        <Send size={25} />
      </div>
    </div>
  );
};

export default ChatInput;
