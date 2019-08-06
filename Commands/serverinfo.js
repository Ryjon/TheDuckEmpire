const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//insert comands here
let sicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()
.setDescription("Server Information")
.setColor("#f8fc03")
.setThumbnail(sicon)
.addField("Server name", message.guild.name)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount);
 return message.channel.send(serverembed);
}


  module.exports.help = {
    name: "serverinfo"
  }
