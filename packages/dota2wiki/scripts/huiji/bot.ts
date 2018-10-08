import Bot from 'nodemw';
import MWBot from 'mwbot';

const username: string = process.argv[2];
const password: string = process.argv[3];

// console.info(`\nusername: ${username}\npassword: ${password}\n`);

/**
 * Create a `MWBot` instance
 */
export default async function createBot(): Promise<MWBot> {
  const bot: MWBot = new MWBot({
    apiUrl: 'https://dota2.huijiwiki.com/api.php',
  });

  await bot.loginGetEditToken({
    username,
    password,
  });

  return bot;
}
