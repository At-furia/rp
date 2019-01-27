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
        })

bot.on('message', message => {
            if (message.channel.type === 'dm') return;
if (message.author.bot) return;

    let guild = message.member.guild;
    let Humain = guild.roles.find(role => role.id === "538868210984943666");
    let Robot = guild.roles.find(role => role.id === "538868260989435924");

    if (message.content.startsWith(prefix + "humain")) {
        message.delete()
    if (message.member.roles.has(Humain.id)||message.member.roles.has(Robot.id)) {
    } else {
        message.member.addRole(Humain);
        message.author.sendMessage("Vous êtes désormais dans le camp des Humains !")
    }
        
     if (message.content.startsWith(prefix + "robot")) {
         message.delete()
         if (message.member.roles.has(Robot.id)||message.member.roles.has(Humain.id)) {
    } else {
        message.member.addRole(Robot);
        message.author.sendMessage("Vous êtes désormais dans le camp des Robots !")

        }
    }
    })
