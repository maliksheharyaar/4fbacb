import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

  const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const unReadMessagesOtherUser = messages.filter((message) => message.isRead === true && message.senderId !== otherUser.id);
  const latestTextMessageRead = unReadMessagesOtherUser[ unReadMessagesOtherUser.length - 1 ];
    return (
      <Box >
        {messages.map(
          (message) => {
            const time = moment(message.createdAt).format('h:mm');
            return message.senderId === userId ? (
              <SenderBubble key={message.id} message={message} time={time} otherUser={otherUser} latestTextMessageRead={latestTextMessageRead}/>
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
