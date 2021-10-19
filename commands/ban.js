const db = require('quick.db');

const ban_data = 'ban_data.banned_user';

module.exports = {
    name: 'ban',
    description: "ban user from using this bot!\n",
    execute(client, message, cmd, args, Discord){

        if(!message.member.permissions.has("MANAGE_GUILD")){
            return message.reply("you don't have a permission to ban user for using dfobot! Only Manage Guild permission owner is allowed to run this command!");
        }

        const target_id = message.mentions.users.first().id;
        const member_target = message.guild.members.cache.get(target_id);
        const member_target_id = member_target.user.id;
        console.log(member_target_id);
        if(member_target.permissions.has("MANAGE_GUILD") && member_target_id != '138787539518619648' ){
            return message.reply("you cannnot ban server manager");
        }

        message.reply(`<@${member_target_id}> has been banned for using dfobot!`);
        db.push(ban_data, member_target_id);
        client.users.cache.get(member_target_id).send("The manager of <" + message.guild.name + "> has banned you for using dfobot.");
        //message.member_target.send("The manager of " + message.guild.name + " has banned you for using dfobot.");
    },
    check_banned(client, message, Discord){
        //db.delete(ban_data);
        if(!db.has(ban_data)){
            db.set('ban_data', { banned_user: [ ] });
        }

        const target_user = message.author.id;

        if(db.get(ban_data).indexOf(target_user) !== -1){
            return true;
        }        
    }
}