module.exports = {
    name: 'mythic',
    description: "simulate mythic drop, get how many runs of GOW it takes and what mythic will get\n",
    execute(client, message, args, Discord){
        var counter = 0;
        var is_dropped = false;
        while(!is_dropped){
            const drop_rate = Math.random() * 100;
            counter++;
            //console.log(drop_rate);
            if(drop_rate <= 0.06){
                is_dropped = true;
            }
        }
        const item = random_mythic();
        const msg = "You have run GOW " + counter + " times and you got [" + item + "]";
        message.reply(msg);



    }
}

function random_mythic(){
    const items = ["Arch Celebrant's Gown", "Archmange [???]'s Robe", "Romantic Waltz", "Ancient Abyssal Robe",
    "Shadowy Fate Governor Jacket", "Senior Executor's Coat", "Last-ditch Effort", "Drifter's Water Buffalo Coat",
    "Blazing Valor of Earth", "Tropica: Drake", "Wearable Arc Pack", "Reversed End", "Satan: The Furious Monarch",
    "Heavenly Wings", "Solidarity Chain Plate", "Apocalyptic Fury", "Mystical Circulation of the World",
    "Selective Advantage", "Land of the Primordial Beginning", "Raido: The Creator of Order", "Dawning Glow",
    "Ganesha's Everlasting Blessing", "Supreme Flame: Ifrit", "Endless Research", "Time-defying Magnetic Needle",
    "Sonorous Battle Roar", "Fate Rampager", "War God's Last Desire", "Sea of Eternal Promises", "Another Flow of Time",
    "Plasma Super Vacuum Tube", "Eternally Abyssal Darkverse", "Interdimensional Supernova", "Destiny Defier", "Excruciating Tragedy"]
    
    return items[Math.floor(Math.random()*items.length)];

}