const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

//insert comands here
let {body} = await superagent
.get(`https://random.dog/woof.json`);
let dogembed = new Discord.RichEmbed()
.setColor ("#384ded")
.setTitle("Dog")
.setImage(body.url);

message.channel.send(dogembed);
}
  module.exports.help = {
    name: "dog"
  }
