const Discord = require("discord.js");
const fs = require ("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

//insert commands here
if(!args[2]) return message.reply("Thats not a question");


let type = args.slice(1);
if (type = "why") {

let replies = ["yes","No","Impossible to tell","Ask again later"];
};
if (type = "who") {

let replies = ["yes","No","Impossible to tell","Ask again later"];
};
if (type = "where") {

let replies = ["yes","No","Impossible to tell","Ask again later"];
};
if (type = "when") {

let replies = ["yes","No","Impossible to tell","Ask again later"];
};
if (type = "how") {

let replies = ["yes","No","Impossible to tell","Ask again later"];
};

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#29495e")
.addField("Question", question)
.addField("Response", replies[result]);

message.channel.send(ballembed);

}
  module.exports.help = {
    name: "8ball"
  }
