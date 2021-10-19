module.exports = {
    name: '꼬',
    description: "꼬추 길이..",
    execute(client, message, cmd,  args, Discord){
        message.reply(args[0][0] + "꼬" + random_length(Math.random()))
    }
}

function random_length(prob){
    if(prob <= 0.3){
        return "1"
    }
    else if(prob <= 0.6){
        return "2"
    }
    else if(prob <= 0.9){
        return "3"
    }
    else{
        return "10"
    }
}