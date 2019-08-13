const Discord = require("discord.js");
const fs = require ("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

//insert comands here
if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply("No");
let botmessage = args.join(" ");
message.delete().catch();
message.channel.send(botmessage);


}
  module.exports.help = {
    name: "say"
  }
