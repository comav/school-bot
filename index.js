const { Telegraf, Markup } = require('telegraf');
const dotenv = require('dotenv');
const { Keyboard, Key } = require('telegram-keyboard');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

let language = undefined;

bot.start((ctx) => {
    let keyboard = Keyboard.inline([
        Key.callback('🇺🇦', language = 'ukrainian'),
        Key.callback('🇬🇧', language = 'english')
    ])
    ctx.reply('Choose your language', keyboard);
});

bot.command('mylang', (ctx) => {
    ctx.reply(language);
})

bot.launch();

console.log('Bot is running...');
console.log(language);

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));