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

const Chat = ({ conversation, setActiveChat, activeConvoMessageUpdate, activeConversation, setUnreadMessages }) => {
  const classes = useStyles();
  const { otherUser } = conversation;
  const handleClick = async (conversation) => {
    await setActiveChat(conversation.otherUser.username);
    if (conversation?.id !== undefined && conversation.unReadMessages !== 0) {
      await activeConvoMessageUpdate(conversation.id, conversation.otherUser);
    }
  };
  useEffect(() => {
    if (conversation?.id && activeConversation) {
      if (conversation.otherUser.username !== activeConversation) {
        setUnreadMessages(conversation.id);
      } else {
        activeConvoMessageUpdate(conversation.id, conversation.otherUser);
      }
    }else if(conversation?.id){

        setUnreadMessages(conversation.id);
    }

  },[conversation.id, conversation.messages, conversation.otherUser, activeConversation, setUnreadMessages, activeConvoMessageUpdate])
  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      <UnreadMessagesContainer unReadMessages={conversation.unReadMessages || 0} />
    </Box>
  );
};

export default Chat;
