const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
//const ConversationUsers = require('./conversationUsers');

// associations

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" }); //Remove this for the commented associations below to refactor for group chat redesign
Conversation.belongsTo(User, { as: "user2" }); //Remove this for the commented associations below to refactor for group chat redesign
/*
Conversation.belongsTo(User);
Conversation.belongsToMany(User, { through: ConversationUsers });
User.belongsToMany(Conversation, { through: ConversationUsers });
Conversation.hasMany(ConversationUsers);
ConversationUsers.belongsTo(Conversation);
User.hasMany(ConversationUsers);
ConversationUsers.belongsTo(User);
*/
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message,
  //ConversationUsers
};
