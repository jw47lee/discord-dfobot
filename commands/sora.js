module.exports = {
    name: 'sora',
    description: "Ask magic conch anything!\n",
    execute(client, message, cmd, args, Discord){
        const prob = Math.random();
        const msg = random_sora(prob);
        message.reply(msg);
    }
}

function random_sora(prob){
    if(prob <= 0.45){
        return "https://cdn.discordapp.com/attachments/554540868300963841/892886509961764864/546cb0abca1bd50a792cca46fa650f42.png"
    }
    else if(prob <= 0.9){
        return "https://cdn.discordapp.com/attachments/554540868300963841/892887545959034890/tenor.png"
    }
    else{
        return "https://cdn.discordapp.com/attachments/554540868300963841/892887727010369556/unknown.png"
    }
}