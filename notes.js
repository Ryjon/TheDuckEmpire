client.on("message", async message => {


  // This event will run on every single message received, from any channel or DM.
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if (message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();





//////dif shit below

  if(cmd === `${prefix}botinfo`){


        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#f5c842")
        .addField("Bot Name", bot.user.username)


           message.channel.send(botembed);
    }

    
