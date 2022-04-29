import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar, Badge } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  avatar: {
    height: 20,
    width: 20,
    marginTop: 6,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
}));

const SenderBubble = ({ time, message, otherUser, latestTextMessageRead }) => {
  const classes = useStyles();
  const readLatestMessage = message?.id === latestTextMessageRead?.id
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{message.text}</Typography>
      </Box>
      {
        (readLatestMessage &&
          <Badge>
            <Avatar
              src={otherUser.photoUrl}
              className={classes.avatar}
            />
          </Badge>
        )
      }
    </Box>
  );
};

export default SenderBubble;
