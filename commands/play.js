const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { joinVoiceChannel } = require('@discordjs/voice');
const { getVoiceConnection } = require('@discordjs/voice');
const { channel } = require('diagnostics_channel');

const queue = new Map();
 
module.exports = {
    name: 'play',
    description: "search your music and play it. NOT IMPLEMENTED yet, stay tuned!\n",
    cooldown: 0,
    aliases: ['skip', 'stop', 'p'],
    async execute(client, message, cmd, args, Discord){

        const test_id = 259825165272088576;
        if(message.author.id != test_id){
            return message.reply("not implemented! stay tuned");
        }
        
        const voice_channel = message.member.voice.channel;
        //console.log(voice_channel);
        if (!voice_channel) return message.channel.send('You need to be in a voice channel to execute this command!');
        
        const permissions = voice_channel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have permission to connect to the voice channel");
        if(!permissions.has('SPEAK')) return message.channel.send("You don't have permission to speak");

        const server_queue = queue.get(message.guild.id);        

        if(cmd == 'play' || cmd == 'p'){
            //console.log(!args.length)
            if(args.length < 1) return message.channel.send('You need to send the second argument!');
            let song = {};

            if(ytdl.validateURL(args[0])){
                const song_info = await ytdl.getInfo(args[0]);
                song = {title: song_info.videoDetails.title, url: song_info.videoDetails.video_url};
            }
            else{
                const video_finder = async(query) =>{
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video){
                    song = { title: video.title, url: video.url}
                }
                else{
                    message.reply('Error finding video.0');
                }
            }

            if(!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
    
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                try{
                    const connection = getVoiceConnection(message)
                    //voice_channel.connect();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch(err){
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            }
            else{
                server_queue.songs.push(song);
                return message.channel.send(`${song.title} added to queue!`);
            }
        }
        
    }
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if(!song){
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, {filter: 'audioonly'});
    song_queue.connection.play(stream, {seek: 0, volume: 0.5})
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });

    await song_queue.text_channel.send(`Now playing **${song.title}**`);
        
}