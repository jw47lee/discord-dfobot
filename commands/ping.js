const { MessageEmbed, MessageButton } = require('discord.js');
const { pagination } = require('reconlx');
const paginationEmbed = require('discordjs-button-pagination')
 
module.exports = {
    name: 'ping',
    description: "get 'pong' message back, will be used for testing your ping. not implemented yet\n",
    execute(client, message, cmd, args, Discord){
        const test_id = 259825165272088576;
        if(message.author.id != test_id){
            //return message.reply("not implemented! stay tuned");
        }
        message.reply("aaa");

        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

        const exampleEmbed1 = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

        message.reply("ddd");
        
        const button1 = new MessageButton()
            .setCustomId("previousbtn")
            .setLabel("Previous")
            .setStyle("DANGER");

        const button2 = new MessageButton()
            .setCustomId("nextbtn")
            .setLabel(">")
            .setStyle("SUCCESS");

        const embeds = [exampleEmbed, exampleEmbed1]
        //message.channel.send({ embeds: [exampleEmbed] });
        message.reply("eee");
        
        const buttonList = [button1, button2];
        const timeout = 10000;
        paginationEmbed(message, embeds, buttonList, timeout);

        message.reply("hhh");
        
    }
}