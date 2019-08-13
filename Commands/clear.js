const Discord = require("discord.js");
const fs = require ("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

//insert comands here
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't");
if(!args[0]) return message.channel.send("Can't");
message.channel.bulkDelete(args[0]).then(() =>{
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2500));
})
}
  module.exports.help = {
    name: "clear"
  }
