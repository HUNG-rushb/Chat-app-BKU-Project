import React, { useCallback, useRef, useState } from 'react';
import { Send } from 'react-bootstrap-icons';
import { CardImage } from 'react-bootstrap-icons';
import ContentEditable from 'react-contenteditable';
import { handleChangeFile } from '../../hooks/useChangeFile';
import { useCreateMessage } from '../../graphql/useMessage';
import { uploadChatImageToAWS } from '../../S3/useUploadS3';

const ChatInput = ({ chatId, currentUserId, refetchMessages }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [content, setContent] = useState('');

  const { createMessage } = useCreateMessage();

  const handleFileSelect = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const isImage = (str) => {
    return str.includes('data:image');
  };

  const renderContent = useCallback(() => {
    if (isImage(content)) {
      return '';
    } else {
      return content;
    }
  }, [content]);

  const handleSendMessage = useCallback(async () => {
    if (isImage(content)) {
      console.log({ selectedFile });

      const result = await uploadChatImageToAWS(selectedFile);
      console.log({ result });

      await createMessage({
        variables: {
          createMessageData: {
            userId: currentUserId,
            chatId,
            message: result.Location,
            isImage: true,
          },
        },
      });

      setSelectedFile(null);
      setPreviewImage(null);
    } else {
      if (content.trim() === '') return;

      await createMessage({
        variables: {
          createMessageData: {
            userId: currentUserId,
            chatId,
            message: content,
            isImage: false,
          },
        },
      });

      setContent('');
    }

    refetchMessages();
  }, [content]);

  return (
    <div className="input-message-text">
      <div className="upload-image-input">
        <CardImage size={28} onClick={handleFileSelect} color="#f8ad9d" />
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          onChange={(event) =>
            handleChangeFile(
              event,
              setContent,
              setSelectedFile,
              setPreviewImage,
            )
          }
        />
      </div>

      <img src={previewImage} alt="" />

      <ContentEditable
        html={renderContent()}
        onChange={(e) => {
          setContent(e.target.value);
        }}
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
