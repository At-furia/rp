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


