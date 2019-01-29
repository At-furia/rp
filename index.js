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
          message.reply("Impossible de répondre à votre demande si elle contient une mention")
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
var msgauthor = message.author.username;
    
    let guild = message.member.guild;
    let Humain = guild.roles.find(role => role.id === "538868210984943666");
    let Robot = guild.roles.find(role => role.id === "538868260989435924");

    if (message.content.startsWith(prefix + "humain")) {
        message.delete()
    if (message.member.roles.has(Humain.id)||message.member.roles.has(Robot.id)) {
    } else {
        message.member.addRole(Humain);
const humain_embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(msgauthor, message.author.avatarURL)
    .setTimestamp()
    .addField("Vous avez choisi le camp des Humains","Objectif : Démasquer et dénoncer les robots dans la population\nSi vous démasquez l'un d'eux vous avez le choix entre le dénoncer ou ne rien faire.")
    .setFooter("Dans tous les cas l'accord du robot pour son sort est primordial. À vous d'imaginer un scénario qui vous convient...")
        message.author.sendMessage(humain_embed);
    }
    }
    
    if (message.content.startsWith(prefix + "robot")) {
        message.delete()
    if (message.member.roles.has(Robot.id)||message.member.roles.has(Humain.id)) {
    } else {
        message.member.addRole(Robot);
    
        const robot_embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(msgauthor, message.author.avatarURL)
    .setTimestamp()
    .addField("Vous avez choisi le camp des Robots","Objectif : Ne pas vous faire repérer par un humain.\nSi l'un d'eux vous démasque et vous dénonce vous serez tué...")
    .setFooter("Si un humain vous denonce, vous mourez et vous devez recommencer le RP. Vous pouvez bien entendu vous arranger avec l'humain afin qu'il ne vous dénonce pas ou encore imaginer une évasion avant d'être tué, à vous d'imaginer un scénario qui vous convient...")
        message.author.sendMessage(robot_embed);    
            }
    }
    })


bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let sald = message.guild.channels.find(channels => channels.name ===  "salon-de-l-esprit");
    if (message.channel === sald) { 
                        
    if(message.content.startsWith(prefix +'lois')){
    bot.channels.get("538870009917603841").send(message.content.slice(5, message.content.length));
        } 
    if(message.content.startsWith(prefix +'hist')){
    bot.channels.get("539098415997386752").send(message.content.slice(5, message.content.length));
        } 
    if(message.content.startsWith(prefix +'g')){
    bot.channels.get("538879113859956753").send(message.content.slice(2, message.content.length));
        }
    if(message.content.startsWith(prefix +'rue')){
    bot.channels.get("539108946590564372").send(message.content.slice(4, message.content.length));
        }  
    if(message.content.startsWith(prefix +'mag')){
    bot.channels.get("539108964399317002").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'res')){
    bot.channels.get("539108988361637899").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'par')){
    bot.channels.get("539109004195135528").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'for')){
    bot.channels.get("539109026814754831").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'adu')){
    bot.channels.get("539109125540413480").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'ter')){
    bot.channels.get("538873604167696394").send(message.content.slice(4, message.content.length));
        } 
    }
    
    
 if(message.content.startsWith(prefix +'chambre')){
    let server = message.member.guild;
         let guild = message.member.guild;

    var msgauthor = message.member.nickname;
    let logé = guild.roles.find(role => role.id === "539213131516477452");
     
if (message.member.roles.has(logé.id)) {
    message.reply("Vous possédez déjà une chambre...")
    } else {
        message.reply("Une chambre vous a été assignée !")
        message.member.addRole(logé);
    server.createChannel(`chambre-de-${msgauthor}`, "text",[{
        type: 'role',
        id:'539209033823944725',
        deny:0x400
       },{
        type: 'role',
        id:'538868210984943666',
        allow:0x400
       },{
        type: 'role',
        id:'538868260989435924',
        allow:0x400
       }])
        .then(channel => {
     let category = server.channels.find(c => c.name == "Chambres" && c.type == "category");

    if (!category) throw new Error("erreur");
    channel.setParent(category.id);
  }).catch(console.error);
        }
    }
})
