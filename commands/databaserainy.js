const db = require('quick.db');

module.exports = {
    name: 'databaserainy',
    description: "databaserainy\n",
    execute(client, message, args, Discord){

        db.all().forEach(element => {
            console.log(element);
        });



    }
}