const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const fs = require('fs');
const { ClientRequest } = require('http');

require('dotenv').config();

client.commands = new Discord.Collection();
client.events= new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

//const lumber = '<@!123622083073671168>';

//const dun_tag = '<@&813592247341154355>';
/*
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
// !계산 ((1+((15000+버프스탯)/250))*(2650+물마독공))/10
//message.member.roles.cache.has();
//message.member.roles.add()
//message.member.roles.cache.some(r => r.name === "-던-") // check if the person has role name -던-
//message.guild.roles.cache.find(r => r.name === "-던-") // find =던- in guild
//message.memeber.permissions.has()
//https://discord.com/channels/497627028502216710/554540868300963841/885915995036864543

client.on('message', message =>{
    console.log("[" + message.guild.name + "]" + " #" + message.channel.name + " " + message.content);

    // meme gen
    if(message.content.startsWith('응애 나 애기')){
        message.channel.send('오구오구');
    }
    else if(message.content.startsWith('선넘네')){
        message.channel.send('https://media.discordapp.net/attachments/554540868300963841/890341798155796520/icon_20.png');
    }
    else if(message.content.startsWith('편-안')){
        message.channel.send('https://cdn.discordapp.com/emojis/554580126319509504.png?v=1');
    }
    else if(message.content.startsWith('로나로나땅땅')){
        message.channel.send('오함마로땅땅');
    }

    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    //console.log(args)
    const command = args.shift().toLowerCase();
    //console.log(command)

    if(command === 'h' || command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'rc'){
        client.commands.get('rc').execute(message, args);
    }
    else if(command === 'buff'){
        client.commands.get('buff').execute(message, args);
    }
    else if(command === 'rein'){
        client.commands.get('rein').execute(message, args);
    }
    else if(command === 'amp'){
        client.commands.get('amp').execute(message, args);
    }
    else if(command === 'mythic'){
        client.commands.get('mythic').execute(message, args);
    }
    else if(command === 'sora'){
        client.commands.get('sora').execute(message, args);
    }
    else if(command === '꼬'){
        client.commands.get('꼬').execute(message, args);
    }
    else if(command === '강정호'){
        client.commands.get('강정호').execute(message, args);
    }
    else if(command === '슬롯'){
        //client.commands.get('슬롯').execute(message, args);
    }
})
*/

client.login(process.env.TOKEN);