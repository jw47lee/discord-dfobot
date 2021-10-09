module.exports = {
    name: 'rc',
    description: "get random channel for GOW. If you add your character list, you can get random order of your chars\n",
    execute(client, message, args, Discord){
        if(args.length == 0){
            const last_ch = 46;
            const first_ch = 10;
            const random_ch = Math.floor(Math.random() * (last_ch - first_ch + 1)) + first_ch;
            
            const normal_or_ex = Math.random()
            let msg = 'your lucky channel is ' + random_ch;

            if(normal_or_ex < 0.5){
                msg += ', run normal';
            }
            else{
                msg += ', run expert if you can';
            }
            
            message.reply(msg + '! good luck!');
        }
        else{
            let msg = 'this is your lucky order today: '
            shuffle(args);
            for (let i = 0; i < args.length; i++){
                msg += (args[i] + ' ');
            }
            message.reply(msg);
        }
    }

}

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}