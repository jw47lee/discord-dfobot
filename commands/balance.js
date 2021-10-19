module.exports = {
    name: 'balance',
    aliases: ['bal'],
    description: "simulate balance patch for fun\n",
    execute(client, message, cmd, args, Discord){

        if(args[0]){
            var percentage = random_percentage(21) - 55;
            while(percentage == 0){
                percentage = random_percentage(21) - 55;
            }
            var is_buff = "buff: "
            if(percentage < 0){
                is_buff = "nerf: "
            }
            const msg = `**${args[0]}** ${is_buff}${percentage}%`;
            return message.reply(msg);

        }

        const random_selected_char = random_chars();

        var msg = "\`Buff\`:\n";

        for(var i = 0; i < 5; i++){
            const percentage = random_percentage(6);
            msg += `**${random_selected_char[i]}** +${percentage}%\t`;
            if(i % 2 == 0 && i != 0){
                msg += "\n";
            }
        }

        msg += "\`Nerf\`:\n";

        for(var i = 5; i < 8; i++){
            const percentage = random_percentage(5);
            msg += `**${random_selected_char[i]}** -${percentage}%\t`;
        }
        
        message.reply(msg);


    }
}

function random_percentage(max){
    // 5 ~ 30 percentage
    return (Math.floor(Math.random() * max) + 1) * 5;
}

function random_chars(){
    const chars = ['Hitman', 'Secret Agent', 'Trouble Shooter', 'Specialist',
                'Crusader F', 'Inquisitor', 'Shaman', 'Mistress',
                'Vanguard', 'Skirmisher', 'Dragoon', 'Impaler',
                'Blade Master', 'Soul Bender', 'Berserker', 'Asura', 'Ghostblade',
                'Sword Master', 'Dark Templar', 'Demon Slayer', 'Vagabond',
                'Ranger M', 'Launcher M', 'Mechanic M', 'Spitfire M',
                'Ranger F', 'Launcher F', 'Mechanic F', 'Spitfire F',
                'Elemental Bomber', 'Glacial Master', 'Blood Mage', 'Swift Master', 'Dimension Walker',
                'Elementalist', 'Summoner', 'Battle Mage', 'Witch ', 'Enchantress',
                'Elven Knight', 'Chaos', 'Lightbringer', 'Dragon Knight',
                'Nen Master M','Striker M', 'Brawler M', 'Grappler M',
                'Nen Master F', 'Striker F', 'Brawler F', 'Grappler F',
                'Crusader M', 'Monk', 'Exorcist', 'Avenger',
                'Rogue', 'Necromancer', 'Kunoichi', 'Shadow Dancer',
                'Dark Knight', 'Creator']

    const shuffle_char = chars.sort(() => 0.5-Math.random());
    const selected = shuffle_char.slice(0, 8)
    
    return selected;

}