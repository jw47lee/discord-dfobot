const db = require('quick.db');
module.exports = {
    name: 'rein',
    cooldown: 3,
    description: "simulate reinforcement to +n, test your luck! Ex) -rein 12\n",
    execute(client, message, args, Discord){
        const rein_data = 'rein_data';
        const test_id = 259825165272088576;
        if(message.author.id != test_id){
            //return;
        }

        if(args.length < 1){
            return message.reply("provide at least one argument!");
        }

        if(!isNaN(args[0])){
            //console.log(args[0]);
            const rein_num = parseInt(args[0]);
            //console.log(rein_num);
            const trial_msg = "trying reinforcement " + (rein_num-1) + " -> " + rein_num + "\n"
            const suc_msg = trial_msg + "success! " + (rein_num-1) + " -> " + rein_num
            const fail_msg = trial_msg + failure_msg(rein_num);

            if(rein_num > 15 || rein_num < 1){
                message.reply("provide a number between 1 ~ 15");
            }
            else if(reinforce(rein_num)){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
            
        }
        else if(args[0] == 'delete' || args[0] == 'remove'){
            const item_name = args[1];
            const item_id = rein_data + '.' + message.author.id + '.' + item_name;
            if(db.has(item_id)){
                db.delete(item_id);
            }
            else{
                message.reply("no such item called " + item_name);
            }

        }
        else if(args[0] == 'inven'){
            const user_inven = rein_data + '.' + message.author.id;
            const inven_list = db.get(user_inven);
            console.log(inven_list.length);
            var count = 0;
            var list_msg = "this is your item(s) in your inventory: "
            for(var key in inven_list) {
                list_msg += ("[+" + inven_list[key] + " " + key + "], ");
                count++;
            }
            list_msg = list_msg.substring(0, list_msg.length-2);
            if(count == 0){
                message.reply("your inventory is empty!");
            }
            else{
                message.reply(list_msg);
            }
            
        }
        else{
            
            const user_id = message.author.id;
            const user_inven = rein_data + '.' + message.author.id;
            const item_name = user_inven + '.' + args[0];
           
            //db.delete(rein_data); // reset rein_data
            if(!db.has(rein_data)){
                db.set(rein_data, {total_items: 0});
            }

            if(!db.has(item_name)){
                db.set(item_name, 0);
                db.add('rein_data.total_items', 1);
            }

            const rein_num = db.get(item_name) + 1;
            const trial_msg = "trying to reinforcement [" + args[0] + "] " + (rein_num-1) + " -> " + rein_num + "\n"
            const suc_msg = trial_msg + "success! " + (rein_num-1) + " -> " + rein_num
            const fail_msg = trial_msg + failure_msg(rein_num);

            if(db.has(item_name)){
                if(reinforce(rein_num)){
                    db.add(item_name, 1);
                    message.reply(suc_msg);
                }
                else{
                    message.reply(fail_msg);
                    if(rein_num === 11 || rein_num === 12){
                        db.subtract(item_name, 3);
                    }
                    else if(rein_num >= 13){
                        db.delete(item_name);
                    }
                }
                
            }
        }
        
    }

}

function failure_msg(rein_num){
    
    if(rein_num <= 10){
        return "Fail! " + (rein_num-1) + " -> " + (rein_num-1);
    }
    else if(rein_num === 11 || rein_num === 12){
        return "Fail! " + (rein_num-1) + " -> " + (rein_num-4);
    }
    else{
        return "Reinforcement Failed :boom:"
    }
}

// return true if success, otherwise false
function reinforce(rein_num){
    var result = false;
    
    const rein_rate = Math.random();

    if(rein_num >= 1 && rein_num < 5){
        result = true;
    }
    else if(rein_num === 5){
        if(rein_rate <= 0.8){
            result = true;
        }
    }
    else if(rein_num === 6){
        if(rein_rate <= 0.7){
            result = true;
        }
    }
    else if(rein_num === 7){
        if(rein_rate <= 0.6){
            result = true;
        }
    }
    else if(rein_num === 8){
        if(rein_rate <= 0.5){
            result = true;
        }
    }
    else if(rein_num === 9){
        if(rein_rate <= 0.4){
            result = true;
        }
    }
    else if(rein_num === 10){
        if(rein_rate <= 0.3){
            result = true;
        }
    }
    else if(rein_num === 11){
        if(rein_rate <= 0.259){
            result = true;
        }
    }
    else if(rein_num === 12){
        if(rein_rate <= 0.18){
            result = true;
        }
    }
    else if(rein_num === 13){
        if(rein_rate <= 0.171){
            result = true;
        }
    }
    else if(rein_num === 14){
        if(rein_rate <= 0.16){
            result = true;
        }
    }
    else if(rein_num === 15){
        if(rein_rate <= 0.14){
            result = true;
        }
    }
    return result;
}