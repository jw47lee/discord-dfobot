const db = require('quick.db');

module.exports = {
    name: 'databaserainy',
    aliases: ['ddd'],
    description: "databaserainy\n",
    execute(client, message, cmd, args, Discord){

        db.all().forEach(element => {
            console.log(element);
        });

    }
}