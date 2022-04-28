const { Op } = require("sequelize");
const db = require("../db");


const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id]
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id]
      }
      //For the database redesign the above two options for the where clause should be replaced with the one commented out below along with simlar changes thorughout the app.
      /*userId: {
        [Op.or]: [userId]
      },*/
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
