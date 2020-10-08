const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('`-giveaway`', 'Create a giveaway')
        .addField('`-reroll`', 'reroll the winners in the giveaway')
        .addField('`-ping`', 'Check the latency of the bot')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Comming Soon')
        .addField('`Coming Soon`', 'Coming Soon')
        .addField('`Coming Soon`', 'Coming Soon')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Coming Soon')
        .addField('`Coming Soon`', )
        .addField('`Coming Soon`', 'Coming Soon')
        .addField('`Coming Soon`', 'Coming Soon')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}