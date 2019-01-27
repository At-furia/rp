const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const adapter = new FileSync('database.json');
const db = low(adapter);


var prefix = "!"
var bot = new Discord.Client();
var randnum = 0;


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'torturer ton esprit.. - !help', type: 1}})
    console.log("Bot Ready !");
    bot.user.setStatus("online")

    })

  bot.login(process.env.TOKEN);

bot.on('message', message => {
    let userVar = message.author
    let pUser = message.mentions.users.first()

    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
      if(message.content.includes('@')){
          message.reply("Impossible de répondre a votre demande si elle contient une mention")
         } else {
  //    message.delete()
        bot.channels.get("538883311301427200").send(message.content.slice(0, message.content.length)+ " " + userVar); 
    }}
    if (message.content.startsWith(prefix + "mp")) {
                if(!message.member.roles.some(r=>["Présidents"].includes(r.name)) ) 
                    return;
                {
        if (!pUser) {
        }
        else {
            pUser.sendMessage(message.content.slice(3, message.content.length));
        }
    }
    }
    
    
     let guild = "538867865533677569";
    //let Humain = guild.roles.get("538868210984943666");
    let Robot = guild.roles.find(role => role.id === "538868260989435924");

    if (message.channel.type === 'dm') {
          if (message.content.startsWith(prefix + "humain")) {
              message.reply("Vous rejoignez le camp des Humains")
                      message.member.addRole(Humain);

    }
        
     if (message.content.startsWith(prefix + "robot")) {
              message.reply("Vous rejoignez le camp des Robots")
                 message.member.addRole(Robot);

    }}
    })
