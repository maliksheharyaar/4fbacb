import React from "react";
import { Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  unreadMsg: {
    marginRight: '20px',
  }
}));

const UnreadMessagesContainer = ({ unReadMessages }) => {
  const classes = useStyles();
  return (  
      <Badge className={classes.unreadMsg}color="primary" badgeContent={unReadMessages} max={999} showZero={unReadMessages !== 0}  />
  );
}

export default UnreadMessagesContainer;