import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyles = makeStyles(() => ({
  messageDirection: {
    display: 'flex',
    flexDirection:'column-reverse',
    
  },
}));*/

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  //const classes = useStyles();
  const reversedMessages = messages.slice(0).reverse();
  

  return (
    <Box >
      {reversedMessages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
