const Sequelize = require("sequelize");
const db = require("../db");

const ConversationUsers = db.define("ConversationUsers", {
    isRead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = ConversationUsers;