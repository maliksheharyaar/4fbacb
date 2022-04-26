import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { BadgeAvatar, ChatContent, UnreadMessagesContainer } from '../Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
}));

const Chat = ({ conversation, setActiveChat, updateMessageStatus, queueUpdateMessage, activeConversation, setUnreadMessages }) => {
  const classes = useStyles();
  const { otherUser } = conversation;
  const handleClick = async (conversation) => {
    conversation.unReadMessages = [];
    conversation.messages.map((message) => message.isRead = true);
    await setActiveChat(conversation.otherUser.username);
    if (conversation.id !== undefined && conversation.unReadMessages.length !== 0) {
      await updateMessageStatus(conversation);
    }
  };
  useEffect(() => {
    if (conversation.id !== undefined && activeConversation !== null && conversation.otherUser.username !== activeConversation) {
      setUnreadMessages(conversation);
    } 
    if (conversation.id !== undefined && activeConversation !== null && conversation.otherUser.username === activeConversation) {
      conversation.unReadMessages = [];
      conversation.messages.map((message) => message.isRead = true);
      queueUpdateMessage(conversation);
    }

  },[conversation.messages, activeConversation, setUnreadMessages, queueUpdateMessage])
  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      <UnreadMessagesContainer unReadMessages={conversation.unReadMessages || []} />
    </Box>
  );
};

export default Chat;
