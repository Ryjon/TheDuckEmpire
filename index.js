const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");

fs.readdir("./Commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands");
    return;
  }

jsfile.forEach((f,i)=> {
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});
});


bot.on("ready", async ()=> {
console.log(`${bot.user.username} is online!`);
bot.user.setActivity("Coding", {type: "WATCHING"});
});

bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type ==="dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
if (commandfile) commandfile.run(bot,message,args);

if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins:0
  };
}

let coinAmt = Math.floor(Math.random() * 15) +1;
let baseAmt = Math.floor(Math.random() * 15) +1;
console.log(`${coinAmt} ; ${baseAmt}`);
if (coinAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins +coinAmt

  };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#1fd13a")
  .addField(":moneybag:", `${coinAmt} coins added!`)

  message.channel.send(coinEmbed).then(msg => {msg.delete(2500)

  })
}
});





bot.login(botconfig.token);
