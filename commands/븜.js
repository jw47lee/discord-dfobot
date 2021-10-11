
const { MessageEmbed, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');
const { pagination } = require('reconlx');
const db = require('quick.db');

const fmage_data = 'fmage_data';
const meme_lst = fmage_data + '.meme_lst';
//const meme_name = fmage_data + '.meme_name';
const meme_added_date = fmage_data + '.meme_added_date';
const meme_uploader = fmage_data + '.meme_uploader';

module.exports = {
    name: '븜',
    description: "generate random fmage meme",
    execute(client, message, args, Discord){

        const test_id = 259825165272088576;
        if(message.author.id != test_id){
            //return;
        }
        const fmage_data = 'fmage_data';
        const total_meme = fmage_data + '.total_meme';
        //const first_meme = 'https://cdn.discordapp.com/attachments/806686189603389520/894826625978474546/99ED394B5AAF180C1F.png';
        //db.add(total_meme, 1);
        if(!db.has(fmage_data)){
            db.set(fmage_data , {total_meme: 0, meme_lst: [], meme_added_date: [], meme_uploader: []});
        }
        //db.set(fmage_data , {total_meme: 0, meme_lst: [], meme_added_date: [], meme_uploader: []});
        //show list
        if(args[0] == '리스트' || args[0] == 'list'){
            const ch_name = message.channel.name;
            if(db.get(meme_lst).length == 0){
                return message.reply("fmage meme is empty! please add then try again!");
            }
            
            

                if(message.author.id != test_id){
                    //return;
                }
                //message.reply("시발")
                const pages = get_list();

                const button1 = new MessageButton()
                    .setCustomId("previousbtn")
                    .setLabel("<")
                    .setStyle("DANGER");

                const button2 = new MessageButton()
                    .setCustomId("nextbtn")
                    .setLabel(">")
                    .setStyle("SUCCESS");

                const button3 = new MessageButton()
                    .setCustomId("lastpagebtn")
                    .setLabel(">")
                    .setStyle("SUCCESS");


                const buttonList = [button1, button2];
                const timeout = 20000;
                paginationEmbed(message, pages, buttonList, timeout);
                /*
                pagination({
                    author: message.author,
                    embeds: pages,
                    channel: message.channel,
                    time: 10000,
                });
                */
                //message.channel.send(first);
/*
                const pages = [first, second];
            
                pagination({
                    embeds: pages,
                    message: message,
                    fastSkip: true,
                    pageTravel: true,

                });
                */

            

        }
        // delete
        else if(args[0] == "삭제" || args[0] == "delete" || args[0] == "remove" ){
            if(!message.member.permissions.has("MANAGE_GUILD")){
                return message.reply("you don't have a permission to delete fmage meme! Only Manage Guild permission owner is allowed to run this command!");
            }
            if(db.get(meme_lst).length == 0){
                return message.reply("fmage meme is empty! please add then try again!");
            }
            if(args.length <= 1){
                if(message.author.id != test_id){
                    return;
                }
                message.reply("hhhh");
                message.reply(get_list());
            }
            else{
                const index = parseInt(args[1]) - 1;
                message.reply("remove this meme: " + db.get(meme_lst)[index]);
                db_delete_list_item(meme_lst, index);
                db_delete_list_item(meme_added_date, index);
                db_delete_list_item(meme_uploader, index);
                db.subtract(total_meme, 1);
                
            }
        }
        // output
        else if(args.length == 0){
            if(db.get(meme_lst).length == 0){
                message.reply("fmage meme is empty! please add then try again!");
            }
            else{
                message.reply(random_fmage_meme());
            }
            
        }
        // add
        else if(args[0].startsWith("https://")){
            if(args[0].includes("youtu.be")){
                return message.reply("no youtube link plz");
            }
            db.add(total_meme, 1);
            db.push(meme_lst, args[0])
            db.push(meme_added_date, date_format())
            db.push(meme_uploader, message.author.id);
            message.reply("new fmage meme added!");
        }
        // wrong command
        else{
            message.reply("wrong argument! please try again!");
        }
        

    }
}

function get_list(){
    var pages = [];
    const meme_l = db.get(meme_lst);
    const meme_d = db.get(meme_added_date);
    const meme_u = db.get(meme_uploader);
    //var msg = "don't know what to delete? here is the list for you."
    for (var i = 0; i < meme_l.length; i++){
        const index = (i+1).toString();
        const embed_page = new MessageEmbed()
            .setColor("RED")
            .setTitle('fmage meme #' + index)
            .setDescription('uploaded by' + '<@!' + meme_u[i] + '> ' + meme_d[i])
            .setImage(meme_l[i]);

        pages.push(embed_page);
        //msg += (i+1) + '\n' + meme_l[i] + '\n' + 'uploaded ' + meme_d[i] + '\n\n';
    }
    return pages;
}

function date_format(){
    const d = new Date();
    const msg = d.toLocaleString();
    return msg;
    
}

function db_delete_list_item(lst, index){
    const item_lst = db.get(lst);
    var new_lst = [];
    for(var i = 0; i < item_lst.length; i++){
        if(i != index){
            new_lst.push(item_lst[i]);
        }
    }
    db.set(lst, new_lst);

}


function random_fmage_meme(){
    
    const items = db.get(meme_lst);
    
    return items[Math.floor(Math.random()*items.length)];

}