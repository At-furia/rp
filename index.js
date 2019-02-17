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
    bot.user.setPresence({ game: { name: 'protéger le vaisseau', type: 1}})
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
                if(!message.member.roles.some(r=>["Organisateurs"].includes(r.name)) ) 
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
    //let citoyen = guild.roles.find(role => role.id === "539209033823944725");
   // let Humain = guild.roles.find(role => role.id === "538868210984943666");
   // let Robot = guild.roles.find(role => role.id === "538868260989435924");
    
    if (message.content.startsWith(prefix + "monter")) {
        message.delete()
    if (message.member.roles.has(membre.id)) {
    } else {
        message.member.addRole(membre);
        //message.member.removeRole(citoyen)
       // message.member.removeRole(Humain)
     //   message.member.removeRole(Robot)
       
    }
    }
    
    
        let trappe = guild.roles.find(role => role.id === "546717598281236482");

        if (message.content.startsWith(prefix + "trappe")) {
        message.delete()
    if (message.member.roles.has(membre.id)) {
    } else {
        message.member.addRole(trappe);
   
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




