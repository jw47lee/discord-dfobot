const db = require('quick.db');

module.exports = {
    name: '강정호',
    description: "get 강정호's picture, get rare picture with 0.125 percent rate\n",
    execute(client, message, cmd, args, Discord){
        const kang_data = 'kang_trial';
        const kang_suc = 'kang_success';

        if(!db.has(kang_data)){
            db.add(kang_data , 0);
        }

        if(!db.has(kang_suc)){
            db.add(kang_suc, 0);
        }

        if(args[0] == "count"){
            if(db.has(kang_data) && db.has(kang_suc)){
                message.reply("-강정호 command called " + db.get(kang_data) + " times! succeed " + db.get(kang_suc) + " times!");
            }
            else{
                message.reply("you have not tried -강정호 command yet");
            }

        }
        else{

            db.add(kang_data, 1);
            if(Math.random()*100 <= 0.125){
                db.add(kang_suc , 1);
                message.reply("https://cdn.discordapp.com/attachments/554540868300963841/893349382328582184/9k.png");
    
            }
            else{
                message.reply("https://cdn.discordapp.com/attachments/554540868300963841/893352182919860264/1.png");
            }

        }


    }
}
