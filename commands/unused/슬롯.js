const db = require('quick.db');

module.exports = {
    name: '슬롯',
    description: "live or die",
    cooldown: 3,
    async execute(client, message, args, Discord){
        const suc_rate = 0.125;
        //db.set('slot_data', {total_trial: 0, winner: [], })
        if(!db.has('slot_data')){
            db.set('slot_data' , { total_trial: 0, winner: []});
        }
        const user_data = 'slot_data.' + message.author.id;
        if(args[0] == "시도횟수"){
            if(db.has(user_data)){
                message.reply("you have tried " + db.get(user_data) + " times!");
            }
            else{
                message.reply("you have not tried -슬롯! try this again after you try it!");
            }

        } else {
            db.add('slot_data.total_trial', 1);
            if(!db.has(user_data)){
                db.push(user_data, parseInt(0));
            }

            db.set(user_data, parseInt(db.get(user_data)) + 1);
            
            if(Math.random() * 100 <= suc_rate){ 
                await message.reply("당첨!").then((message) => message.pin());
                db.push('slot_data.winner', message.author.id);
                
            }
            else{
                await message.reply("ㅇ~ 아니야~");
            }
        }
        
    }
}

