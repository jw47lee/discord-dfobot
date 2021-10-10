const db = require('quick.db');

module.exports = {
    name: '띵진',
    description: "희망편 or 절망편",
    execute(client, message, args, Discord){
        message.reply(random_dding());   
    }
}

function random_dding(){
    const items = ["https://cdn.discordapp.com/attachments/806686189603389520/893991463338270720/9k.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/895755202613887046/238fbc76458d99e0026a2d1cf1c7c9c55cd8e81f85c6f8eff3c51ba0fb294d62.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/893991494464176158/9k.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/894796461705949204/9k.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/894796184496013322/327a5772aaf7ba4e91a3f969d39bc034.png"
    ];
    
    return items[Math.floor(Math.random()*items.length)];

}