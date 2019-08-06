const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.channel.send("Couldnt find user");
  let reason = args.join(" ").slice(22);
  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
   .setColor("#f8fc03")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported By:", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", reason)
  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Coundn't find report channel");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);


  return;
  }

module.exports.help = {
  name: "report"
}
