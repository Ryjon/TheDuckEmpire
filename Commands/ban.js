const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You do not have the permissions to do that");
  if (bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("That user cannot be kicked");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Banned")
  .setColor("#780109")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason)
  let banChannel = message.guild.channels.find(`name`, "incidents");
  if (!banChannel) return message.channel.send("Can't find incidents channel");

  message.guild.member(bUser).ban(bReason);
  incidentsChannel.send(banEmbed);


  return;
  }


  module.exports.help = {
    name: "ban"
  }
