const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You do not have that permission");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("Could not find user");
let role = args.join(" ").slice(22);
if(!role) return message.reply("Specify a role");
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.reply("Couldn't find that role");
if(rMember.roles.has(gRole.id));
await(rMember.removeRole(gRole.id));

try{
  await rMember.send(`${gRole.name} has been removed`)
}catch(e){
  message.channel.send(`<@${rMember.id}>, has had the ${gRole.name} role removed.`)
  }
}
  module.exports.help = {
    name: "removerole"
  }
