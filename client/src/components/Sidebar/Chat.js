import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
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
const UnreadMessages = ({ unReadMessages}) => (
  unReadMessages.length !== 0 && (
    <Typography> {unReadMessages.length} </Typography>
  ) 
)

const Chat = ({ conversation, setActiveChat, activeConversation }) => {
  const classes = useStyles();
  const { otherUser } = conversation;
  const handleClick = async (conversation, activeConversation) => {
    conversation.unReadMessages = [];
    conversation.messages.map((message) => message.isRead = true);
    await setActiveChat(conversation.otherUser.username);
    if (activeConversation !== {} && activeConversation !== undefined ) {
    }
  };

  return (
    <Box onClick={() => handleClick(conversation, activeConversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      <UnreadMessages unReadMessages={conversation.unReadMessages}/>
    </Box>
  );
};

export default Chat;
