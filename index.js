const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const adapter = new FileSync('database.json');
const db = low(adapter);


var prefix = "!"
var bot = new Discord.Client();
var randnum = 0;

db.defaults({objet: [],asteroide: []}).write()

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
    let oclr = guild.roles.find(role => role.id === "540278937356337153");

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
    
    
        abc = Math.ceil(Math.random() * 100);
if (message.content === prefix + "roulette") {

        message.reply(`a fait tourner la roulette et obtient le numéro ${abc} !`)
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
    
    if (message.content.startsWith(prefix + "oclr001")) {
        message.delete()
    if (message.member.roles.has(oclr.id)) {
    } else {
        message.member.addRole(oclr);
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



////////////////////////////////////////////////////////////// RP2 /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// RP2 /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// RP2 /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// RP2 /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// RP2 /////////////////////////////////////////////////////////////////


bot.on('message', message => {
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;
    var msgauthor = message.author.username;
    let guild = message.member.guild;
    

    let membre = guild.roles.find(role => role.id === "541413753254838293");
    let citoyen = guild.roles.find(role => role.id === "539209033823944725");
    let Humain = guild.roles.find(role => role.id === "538868210984943666");
    let Robot = guild.roles.find(role => role.id === "538868260989435924");
    
    if (message.content.startsWith(prefix + "monter")) {
        message.delete()
    if (message.member.roles.has(membre.id)) {
    } else {
        message.member.addRole(membre);
        message.member.removeRole(citoyen)
        message.member.removeRole(Humain)
        message.member.removeRole(Robot)
       
    }
    }
    
    
     if(message.content.startsWith(prefix +'manuel')){

    const robot_embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(msgauthor, message.author.avatarURL)
    .setTimestamp()
    .addField("Manuel de survie","🎲 Passez le temps avec les autres pour ne pas vous ennuyer dans la salle commune\n🛏️ Dormez dans vos couchettes pour ne pas vous fatiguer..et faire vos petites affaires..\n🍽️ Mangez et buvez régulièrement dans la Cuisine\n🚿 Lavez vous dans les Douches\n🌌 Mettez OBLIGATOIREMENT votre combinaison pour sortir dans l'Espace\n🌽 Vous pouvez faire pousser toutes sortes de choses dans le Jardin Artificiel pour vous nourrir\n⌨️ Allez à la salle de commandement pour diriger le vaisseau\n🔧 Vérifiez régulièrement la salle des machines afin de vérifier que tout marche correctement")
        message.author.sendMessage(robot_embed);    
            }
    
     if(message.content.startsWith(prefix +'couchette')){
    let server = message.member.guild;
         let guild = message.member.guild;

    var msgauthor = message.member.nickname;
    let logé = guild.roles.find(role => role.id === "543920391928807434");
     
if (message.member.roles.has(logé.id)) {
    message.reply("Vous possédez déjà une couchette...")
    } else {
        message.reply("Une couchette vous a été assignée !")
        message.member.addRole(logé);
    server.createChannel(`couchette-de-${msgauthor}`, "text",[{
        type: 'role',
        id:'539209033823944725',
        deny:0x400
       },{
        type: 'role',
        id:'541413753254838293',
        allow:0x400
       }])
        .then(channel => {
     let category = server.channels.find(c => c.name == "Couchettes" && c.type == "category");

    if (!category) throw new Error("erreur");
    channel.setParent(category.id);
  }).catch(console.error);
        }
    }
   
    
    let sald = message.guild.channels.find(channels => channels.name ===  "salon-de-l-esprit");
    if (message.channel === sald) { 
                        
    if(message.content.startsWith(prefix +'bvn')){
    bot.channels.get("541219020762775562").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'reg')){
    bot.channels.get("541221925418958848").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'his')){
    bot.channels.get("541222525250568215").send(message.content.slice(4, message.content.length));
        }
    if(message.content.startsWith(prefix +'fic')){
    bot.channels.get("541225309995794453").send(message.content.slice(4, message.content.length));
        }  
    if(message.content.startsWith(prefix +'ann')){
    bot.channels.get("544233264341057543").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'sco')){
    bot.channels.get("541029578811113485").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'sdc')){
    bot.channels.get("541029655466213378").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'cui')){
    bot.channels.get("541283049451683862").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'jar')){
    bot.channels.get("541029689913901080").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'sdp')){
    bot.channels.get("544901130950279198").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'dou')){
    bot.channels.get("541029707521589264").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'sds')){
    bot.channels.get("542430382130200579").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'sdm')){
    bot.channels.get("541029812219674625").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'esp')){
    bot.channels.get("541029733836652557").send(message.content.slice(4, message.content.length));
        } 
    if(message.content.startsWith(prefix +'cou')){
    bot.channels.get("541031829097152527").send(message.content.slice(4, message.content.length));
        } 
    }
    
    544901130950279198
    var objetsdb = db.get("objet").find('etat').value()
    var etatobjet = Object.values(objetsdb);

    //let salde = message.guild.channels.find(channels => channels.name ===  "salon-de-l-esprit");
  //  if (message.channel === salde) { 
    if (message.content === prefix + "obj") {
        var objectsca = ['', 'Un réacteur', 'Un micro-onde', 'Une douche','La ventilation','Le four','Le chauffage']
        randomf = Math.ceil(Math.random() * 6);
        var lettre_aleatoiref = objectsca[randomf];
        if (etatobjet[0] == "marche") {
            bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
            bot.channels.get("544233264341057543").send( `${lettre_aleatoiref}` + " a été endommagé(e) !")
        db.get("objet").find({ etat: "marche" }).assign({ etat: etatobjet[0] = "détruit", objet: etatobjet[2] = `${lettre_aleatoiref}`}).write();

    }}
//}


        randomrep = Math.ceil(Math.random() * 100);
        var timeout = setTimeout(function () {

     if(message.content.startsWith(prefix +'réparer')){
            if (etatobjet[0] == "détruit") {
                db.get("objet").find({ etat: "détruit" }).assign({ etat: etatobjet[0] = "marche",etat2: etatobjet[1] = "marche2"}).write();

                var timeout = setTimeout(function () {

            }, 1 * 1000);

                console.log(randomrep)
                if (randomrep >= 25) {
                    bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
                    bot.channels.get("544233264341057543").send(`${etatobjet[2]}` + " a été réparé(e) !").catch(console.error); // add error handling here
                    bot.channels.get("544233264341057543").send("**Bouclier : +10 points**"); 

                } else {
                    bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
                    bot.channels.get("544233264341057543").send("Quelqu'un a tenté de réparer "+ `${etatobjet[2]}` +" mais n'a pas réussi à réparer correctement...").catch(console.error); // add error handling here
                    bot.channels.get("544233264341057543").send("**Bouclier : -5 points**"); 
 }
          db.get("objet").find({ etat: "détruit" }).assign({ etat: etatobjet[0] = "marche",etat2: etatobjet[1] = "marche2"}).write();  ///////////////
            if (message.author.bot) return;
            }}
            db.get("objet").find({ etat: "détruit" }).assign({ etat2: etatobjet[1] = "détruit2"}).write(); //////////////
        }, 1 * 1800000);

    if (etatobjet[0] == "détruit") {

        var timeout = setTimeout(function () {

        db.get("objet").find({ etat: "détruit" }).assign({ etat2: etatobjet[1] = "détruit2"}).write();
    }, 1 * 1799000);
        }
    
        if (etatobjet[0] == "détruit" && etatobjet[1] == "détruit2") {

            db.get("objet").find({ etat: "détruit" }).assign({ etat: etatobjet[0] = "marche",etat2: etatobjet[1] = "marche2" }).write();
            bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
            bot.channels.get("544233264341057543").send(`${etatobjet[2]}` + " n'a pas été réparé(e) à temps..").catch(console.error); // add error handling here
            bot.channels.get("544233264341057543").send("**Bouclier : -10 points**"); 
if (message.author.bot) return;
}
    
    
    
    
    var directiondb = db.get("asteroide").find('bouger').value()
    var direction = Object.values(directiondb);

    if (message.content === prefix + "ast") {
        number_random = Math.floor(Math.random() * (4950 - 0) + 50)

        console.log(number_random)

        if (direction[0] == "ok") {
            bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
            bot.channels.get("544233264341057543").send(" Un astéroïde est à " + `${number_random}` + " kilomètres du vaisseau !")
            db.get("asteroide").find({ bouger: "ok" }).assign({ bouger: direction[0] = "bouge", distance: direction[2] = `${number_random}`}).write();
    }}

  
        var timeout = setTimeout(function () {
            if(message.content.startsWith(prefix +'diriger')){
            
                if (direction[0] == "bouge") {
                db.get("asteroide").find({ bouger: "bouge" }).assign({ bouger: direction[0] = "ok", bouger2: direction[3] = "ok2"}).write();
                
            bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
            bot.channels.get("544233264341057543").send("L'astéroïde a été esquivé !").catch(console.error); // add error handling here
            bot.channels.get("544233264341057543").send("**Bouclier : +5 points**"); 

            }} 
            db.get("asteroide").find({ bouger: "bouge" }).assign({ bouger: direction[0] = "bouge",bouger: direction[3] = "bouge2"}).write();  ///////////////

       // } //else {
                 //   db.get("asteroide").find({ bouger: "bouge" }).assign({ bouger: direction[0] = "bouge",bouger: direction[3] = "bouge2"}).write();  ///////////////

        }, 1 * 3600000);
         
        if (direction[0] == "bouge") {

        var timeout = setTimeout(function () {

        db.get("asteroide").find({ bouger: "bouge" }).assign({ bouger2: direction[3] = "bouge2"}).write();
    }, 1 * 3599000);
        }

        if (direction[0] == "bouge" && direction[3] == "bouge2") {

            db.get("asteroide").find({ bouger: "bouge" }).assign({ bouger: direction[0] = "ok",bouger2: direction[3] = "ok2"}).write();
            bot.channels.get("544233264341057543").send("**Mise à jour du vaisseau :**"); 
            bot.channels.get("544233264341057543").send("L'astéroïde n'a pas été esquivé à temps.. Le vaisseau a foncé dessus et a été endommagé..").catch(console.error); // add error handling here        
            bot.channels.get("544233264341057543").send("**Bouclier : -15 points**"); 
}
})



bot.on('message', message => {

    var msgauthor = message.author.id

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let hlh = message.guild.channels.find(channels => channels.name === "🎰-casino");
    if (message.channel === hlh) {
        if (message.content == prefix + "tirer") {
            lololwin = Math.ceil(Math.random() * 100);
            lololwine = Math.ceil(Math.random() * 100);

            var alphabet = ['', '💰', '💸', '💲', '🍒', '7️⃣', '🌟', '🍉', '🍆', '💎', '⚜️', '🌻']
            var alphabetfake = ['', '🍉', '🍆', '⚜️', '🌻']
            randomf = Math.ceil(Math.random() * 4);
            var lettre_aleatoiref = alphabetfake[randomf];
            random = Math.ceil(Math.random() * 11);
            random1 = Math.ceil(Math.random() * 11);
            random2 = Math.ceil(Math.random() * 11);
            random4 = Math.ceil(Math.random() * 11);
            random6 = Math.ceil(Math.random() * 11);
            random7 = Math.ceil(Math.random() * 11);
            random8 = Math.ceil(Math.random() * 11);
            random3 = Math.ceil(Math.random() * 11);
            var lettre_aleatoire3 = alphabet[random3];
            var lettre_aleatoire = alphabet[random];
            var lettre_aleatoire1 = alphabet[random1];
            var lettre_aleatoire2 = alphabet[random2];
            var lettre_aleatoire4 = alphabet[random4];
            var lettre_aleatoire6 = alphabet[random6];
            var lettre_aleatoire7 = alphabet[random7];
            var lettre_aleatoire8 = alphabet[random8];

            if (lololwin >= 36) {
                console.log(lololwin)
                message.channel.send(`:slot_machine: **Vous activez le levier de la machine**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n${lettre_aleatoiref} ${lettre_aleatoire4} ${lettre_aleatoire3}:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nMalheureusement la chance n'est pas au rendez-vous, vous ne gagnez rien cette fois-ci..`)
            }
            if (lololwin <= 5) {
                console.log(lololwin)
                message.channel.send(`:slot_machine: **Vous activez le levier de la machine**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n7️⃣7️⃣7️⃣:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nJACKPOT !! Vous gagnez des millions de dollars !`)
            }
            if (lololwin >= 6 && lololwin <= 15) {
                console.log(lololwin)
                message.channel.send(`:slot_machine: **Vous activez le levier de la machine**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n💎💎💎:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nLes gens vous regardent d'un air bizarre comme si vous veniez de gagner un lot très rare, la chance est de votre côté !`)
                let guild = message.member.guild;
                let halo = guild.roles.find(role => role.name === "⚜️ Chanceux ⚜️");
                message.member.addRole(halo);

                if (message.member.roles.some(r => ["⚜️ Chanceux ⚜️"].includes(r.name))) {
                    let guild = message.member.guild;
                    let halo = guild.roles.find(role => role.name === "💸 Give me more money 💸");
                    message.member.addRole(halo);
                }
            }
            if (lololwin >= 16 && lololwin <= 25) {
                console.log(lololwin)
                message.channel.send(`:slot_machine: **Vous activez le levier de la machine**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n🍒🍒🍒:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nVous venez de gagner quelques dollars !`)


            }
            if (lololwin >= 26 && lololwin <= 30) {
                console.log(lololwin)
                message.channel.send(`:slot_machine: **Vous activez le levier de la machine**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n💰💰💰:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nVous venez de gagner plus de 20.000 dollars !`)


            }
            if (lololwin >= 31 && lololwin <= 35) {
                console.log(lololwin)


                message.channel.send(`:slot_machine: **Vous activez le levier de la machine**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n💲💲💲:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nVous gagez mais malheureusement, sur un un moment d'inattention, quelqu'un vous vole votre argent..`)
            }
        }
    }
})
