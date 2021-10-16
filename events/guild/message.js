
const cooldowns = new Map();


module.exports = (Discord, client, message) => {
    const prefix = '-';
    console.log("[" + message.guild.name + "]" + " #" + message.channel.name + " " + message.content);


    //if banned => end program;
    const ban_sys = client.commands.get('ban');
    const is_ban = ban_sys.check_banned(client, message, Discord);
    if(is_ban) return;

    // meme gen


    if(message.content.startsWith('응애 나')){
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
    else if(message.content.startsWith('끄덕')){
        message.channel.send('https://thumbs.gfycat.com/IllinformedMediumAssassinbug-size_restricted.gif');
    }
    else if(message.content.startsWith('븜켁') || message.content.startsWith('켁븜')){
        message.channel.send('https://cdn.discordapp.com/attachments/312701794360885258/894067557043167232/K-002.jpg');
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));


    try{

        if(!cooldowns.has(command.name)){
            cooldowns.set(command.name, new Discord.Collection());
        }
        
        const current_time = Date.now();
        const time_stamps = cooldowns.get(command.name);
        const cooldown_amount = (command.cooldown) * 1000;
    
        if(time_stamps.has(message.author.id)){
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
    
            if(current_time < expiration_time){
                const time_left = (expiration_time - current_time) / 1000;
    
                return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
            }
        }
    
        time_stamps.set(message.author.id, current_time);
    
    
        if(command) command.execute(client, message, args, Discord);

    }catch(err){
        console.log(err);
    }


}