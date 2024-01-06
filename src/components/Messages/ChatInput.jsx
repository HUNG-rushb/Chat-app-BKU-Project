import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Send } from 'react-bootstrap-icons';
import { CardImage } from 'react-bootstrap-icons';
import ContentEditable from 'react-contenteditable';
import { handleChangeFile } from '../../hooks/useChangeFile';
import { useCreateMessage } from '../../graphql/useMessage';
import { uploadChatImageToAWS } from '../../S3/useUploadS3';
import { useCreateChat } from '../../graphql/useChat';

const ChatInput = ({
  chatId,
  currentUserId,
  setAnotherUserCurrent,
  currentOtherUser,
}) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [content, setContent] = useState('');

  const { createMessage } = useCreateMessage();
  const { createChat } = useCreateChat();

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

      if (chatId === 'new') {
        await createChat({
          variables: {
            createChatData: {
              userIDs: [currentUserId, currentOtherUser.id],
              currentUserId,
              firstMessage: result.Location,
              isImage: true,
            },
          },
        });

        setAnotherUserCurrent({ anotherUser: '', isNewChat: false });
      } else
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

      if (chatId === 'new') {
        await createChat({
          variables: {
            createChatData: {
              userIDs: [currentUserId, currentOtherUser.id],
              currentUserId,
              firstMessage: content,
              isImage: false,
            },
          },
        });

        setAnotherUserCurrent({ anotherUser: '', isNewChat: false });
      } else
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

    // refetchMessages();
  }, [
    chatId,
    content,
    createChat,
    createMessage,
    currentOtherUser.id,
    currentUserId,
    selectedFile,
    setAnotherUserCurrent,
  ]);

  const handleKeyPress = useCallback(
    async (event) => {
      if (event?.key === 'Enter') {
        event.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage],
  );

  return useMemo(
    () => (
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

        {previewImage ? (
          <div id="content-with-image">
            <img src={previewImage} height={50} alt="" />
          </div>
        ) : (
          <ContentEditable
            html={renderContent()}
            onKeyPress={(event) => handleKeyPress(event)}
            tagName="div"
            id="content-edit"
          />
        )}

        <div className="send-message-icon" onClick={handleSendMessage}>
          <Send size={25} />
        </div>
      </div>
    ),
    [
      handleFileSelect,
      handleKeyPress,
      handleSendMessage,
      previewImage,
      renderContent,
    ],
  );
};

export default ChatInput;
