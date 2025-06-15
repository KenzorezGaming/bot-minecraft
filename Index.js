// index.js
const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || 'BrutalLegacy.aternos.me',
    port: parseInt(process.env.MC_PORT) || 19320,
    username: process.env.MC_USER || 'BotAFK123',
  });

  bot.once('spawn', () => {
    console.log(`[✅] Bot masuk sebagai ${bot.username}`);
    bot.chat('Bot AFK sudah online 24/7!');
  });

  bot.on('end', () => {
    console.log('[⚠️] Terputus. Mencoba konek ulang dalam 5 detik...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('[❌] Error:', err.message);
  });
}

createBot();
