const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`I LOVE YOU`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});







client.login("NTE2NTg2ODI1ODEzMzI3ODgz.XJ9-zA.YEAlgA5YqZdK2YNF24PeYVQsdO0");