import Bot from 'nodemw';
import MWBot from 'mwbot';
import chalk from 'chalk';

const username: string = process.argv[2];
const password: string = process.argv[3];

// console.info(`\nusername: ${username}\npassword: ${password}\n`);

/**
 * Create a `MWBot` instance
 */
export async function createBot(): Promise<MWBot> {
  const bot: MWBot = new MWBot({
    apiUrl: 'https://dota2.huijiwiki.com/api.php',
  });

  await bot.loginGetEditToken({
    username,
    password,
  });

  console.info(chalk.greenBright('Log in succeed.'));

  return bot;
}

export async function queue<T, R>(
  dataList: T[],
  workers: number,
  action: (data: T, index?: number) => Promise<R>,
): Promise<R[]> {
  const result: R[] = [];

  return new Promise<R[]>((resolve, reject) => {
    let count: number = 0;
    const job: () => Promise<void> = async () => {
      if (count < dataList.length) {
        count++;
        action(dataList[count - 1])
          .then(value => {
            result.push(value);
            job();
          })
          .catch(reject);
      } else {
        resolve(result);
      }
    };
    for (let index: number = 0; index < workers; index++) {
      job();
    }
  });
}
