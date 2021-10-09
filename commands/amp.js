
module.exports = {
    name: 'amp',
    description: "simulate amplication to +n, test your luck! Ex) -amp 12\n",
    execute(client, message, args, Discord){

        const amp_num = parseInt(args[0]);

        const amp_rate = Math.random();
        
        const trial_msg = "trying amplification " + (amp_num-1) + " -> " + amp_num + "\n"
        const suc_msg = trial_msg + "success! " + (amp_num-1) + " -> " + amp_num
        const fail_msg = trial_msg + failure_msg(amp_num);
        
        if(amp_num <= 0 || amp_num > 15){
            message.reply("provide a number between 1 ~ 13");
        }
        else if(amp_num >= 1 && amp_num < 5){
            message.reply(suc_msg);
        }
        else if(amp_num === 5){
            if(amp_rate <= 0.8){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 6){
            if(amp_rate <= 0.7){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 7){
            if(amp_rate <= 0.6){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 8){
            if(amp_rate <= 0.5){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 9){
            if(amp_rate <= 0.4){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 10){
            if(amp_rate <= 0.3){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 11){
            if(amp_rate <= 0.3){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 12){
            if(amp_rate <= 0.2){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else if(amp_num === 13){
            if(amp_rate <= 0.2){
                message.reply(suc_msg);
            }
            else{
                message.reply(fail_msg);
            }
        }
        else{
            message.reply("provide a number between 1 ~ 13");
        }
    }

}

function failure_msg(amp_num){
    
    if(amp_num <= 7){
        return "fail! " + (amp_num-1) + " -> " + (amp_num-2);
    }
    else if(amp_num <= 10){
        return "fail! " + (amp_num-1) + " -> " + (amp_num-4);
    }
    else{
        return "Amplification Failed :boom:"
    }
}