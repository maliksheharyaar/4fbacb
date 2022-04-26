import React from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  unReadMsgs: {
    backgroundColor: '#3A8DFF',
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: '2px 7px',
    borderRadius: "45%",
    marginRight: '10px',
  }
}));

const UnreadMessagesContainer = ({ unReadMessages }) => {
  const classes = useStyles();
  return (
    unReadMessages.length !== 0 && (
      <Typography className={classes.unReadMsgs}>{unReadMessages.length}</Typography>
    )

  );
}

export default UnreadMessagesContainer;