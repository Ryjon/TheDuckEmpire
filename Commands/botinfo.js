const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//insert comands here
let bicon = bot.user.displayAvatarURL;
 let botembed = new Discord.RichEmbed()
 .setDescription("Bot Information")
 .setColor("#f8fc03")
 .setThumbnail(bicon)
 .addField("Created on", bot.user.createdAt)

 .addField("Bot Name", bot.user.username);

return message.channel.send(botembed);
}

  module.exports.help = {
    name: "botinfo"
  }
