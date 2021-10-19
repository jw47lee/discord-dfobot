const db = require('quick.db');

const ban_data = 'ban_data.banned_user';

module.exports = {
    name: 'unban',
    description: "unban user from using this bot!\n",
    execute(client, message, cmd, args, Discord){
        
        const target_id = message.mentions.users.first().id;
        const member_target = message.guild.members.cache.get(target_id);
        const member_target_id = member_target.user.id;

        if(!message.member.permissions.has("MANAGE_GUILD") && member_target_id != '138787539518619648' ){
            return message.reply("you don't have a permission to ban user for using dfobot! Only Manage Guild permission owner is allowed to run this command!");
        }


        if(db.get(ban_data).indexOf(member_target_id) !== -1){
            message.reply(`<@${member_target_id}> has been unbanned for using dfobot!`);
            db_delete_user(ban_data, member_target_id);
            //db.push(ban_data, member_target_id);
            client.users.cache.get(member_target_id).send("The manager of <" + message.guild.name + "> has un-banned you for using dfobot.");
        }  
    }
}

function db_delete_user(lst, user_id){
    const item_lst = db.get(lst);
    var new_lst = [];
    for(var i = 0; i < item_lst.length; i++){
        if(item_lst[i] != user_id){
            new_lst.push(item_lst[i]);
        }
    }
    db.set(lst, new_lst);
}