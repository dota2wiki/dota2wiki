declare module 'nodemw' {
  /**
   * The last parameter of each function in nodemw API is a callback which will be fired when the requested action is done.
   * **Callbacks use node.js style** - `err` is always passed as the first argument.
   */
  type BotCallBack<T = any> = (error: any, data: T) => void;

  class Bot {
    constructor(options: any);

    /**
     * Log-in using given credentials - [read more](http://www.mediawiki.org/wiki/API:Login)
     */
    logIn(username: string, password: string, callback: BotCallBack): void;
    logIn(callback: BotCallBack): void;

    /**
     * Gets the list of all categories on a wiki
     */
    getCategories(prefix: string, callback: BotCallBack): void;

    getArticle(title: string, callback: BotCallBack<string>): void;

    upload(filename: string, content: any, summary: any, callback: BotCallBack): void;

    /**
     * Uploads a given external resource as a File:[filename]
     */
    uploadByUrl(filename: string, url: string, summary: any, callback: BotCallBack): void;
  }

  export = Bot;
}
