module.exports = {
    name: 'buff',
    description: "calculate your buff with two arguments, stat buff and PMI buff\n",
    execute(client, message, args, Discord){
        if(args.length != 2){
            message.channel.send('please provide only 2 arguements, buff stat and PMI stat')
        }
        else{
            const result = Math.round(((1+((15000+parseFloat(args[0]))/250))*(2650+parseFloat(args[1])))/10).toLocaleString();
            message.reply('your buff is ' + result);
        }
    }
}

//!계산 ((1+((15000+64872)/250))*(2650+3082))/10