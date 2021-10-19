const db = require('quick.db');

module.exports = {
    name: 'mj',
    description: "random mj's picture\n",
    execute(client, message, cmd, args, Discord){

        const mj_data = 'mj_trial';

        if(!db.has(mj_data)){
            db.add(mj_data , 0);
        }

        if(args[0] == "count"){
            if(db.has(mj_data)){
                message.reply("you have called -mj command " + db.get(mj_data) + " times!");
            }
            else{
                message.reply("you have not tried -mj command yet");
            }

        }
        else{
            db.add(mj_data, 1);
            message.reply(random_mj());
        }

    }
}

function random_mj(){
    const items = ["https://cdn.discordapp.com/attachments/554540868300963841/893962628215496774/d96612eae75e5d49.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/893979480262074458/unknown.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/893979574638116884/unknown.png",
    "https://cdn.discordapp.com/attachments/806686189603389520/893980279847387177/2.png",
    "smol team plz understand",
    "Yes, Yes, No, No",
    "Soon™"];
    
    return items[Math.floor(Math.random()*items.length)];

}