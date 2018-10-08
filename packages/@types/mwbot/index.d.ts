declare module 'mwbot' {
  namespace MWBot {
    interface UploadResponse {
      upload: {
        result: 'Success' | 'Warning';
        filename: string;
        warnings: { duplicate: any; exists: string; nochange: any };
        imageinfo: {
          timestamp: string;
          user: string;
          userid: number;
          size: number;
          width: number;
          height: number;
          parsedcomment: string;
          comment: string;
          html: string;
          canonicaltitle: string;
          url: string;
          descriptionurl: string;
          descriptionshorturl: string;
          sha1: string;
          metadata: any[];
          commonmetadata: any[];
          extmetadata: any[];
          mime: string;
          mediatype: string;
          bitdepth: number;
        };
      };
    }
  }

  class MWBot {
    constructor(customOptions: any, customRequestOptions?: any);

    loginGetEditToken(options: { username: string; password: string }): Promise<void>;

    upload(
      title: string,
      pathToFile: string,
      comment?: string,
      customParams?: any,
      customRequestOptions?: any,
    ): Promise<UploadResponse>;
    uploadOverwrite(
      title: string,
      pathToFile: string,
      comment?: string,
      customParams?: any,
      customRequestOptions?: any,
    ): Promise<UploadResponse>;
  }

  export = MWBot;
}
