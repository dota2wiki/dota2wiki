declare module 'detect-character-encoding' {
  namespace detectCharacterEncoding {
    interface DetectingResult {
      encoding: string;
      confidence: number;
    }
  }

  function detectCharacterEncoding(buf: Buffer): detectCharacterEncoding.DetectingResult;

  export = detectCharacterEncoding;
}
