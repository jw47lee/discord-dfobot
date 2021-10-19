const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js') && !file.startsWith('help') && !file.startsWith('databaseRainy') && !file.includes('꼬'));
const command_map = new Map();

commandFiles.forEach(function(file){
    const command = require(`./${file}`);
    command_map.set(command.name, command);
})

module.exports = {
    name: 'help',
    description: "this is a help command!\n",
    execute(client, message, cmd, args, Discord){
        var help_msg = this.description;
        //console.log(command_map.get('rc').description);
        command_map.forEach((value, key) => {
            help_msg += '-' + key + ': ' + command_map.get(key).description;
        });
        message.channel.send(help_msg);
    }
}
