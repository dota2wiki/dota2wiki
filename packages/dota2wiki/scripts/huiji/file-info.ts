import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export interface FileInfo {
  filePath: string;
  filename: string;
  hash: string;
  url: string;
}

/**
 * Get the file info with hash
 * @param filePath path to file
 */
export async function genFileInfo(filePath: string): Promise<FileInfo> {
  const md5: crypto.Hash = crypto.createHash('md5');
  const sha512: crypto.Hash = crypto.createHash('sha512');

  const extname: string = path.extname(filePath);
  const baseName: string = path.basename(filePath, extname);
  const baseNameCap: string = baseName[0].toUpperCase() + baseName.substr(1);

  const data: Buffer = fs.readFileSync(filePath);
  const hash: string = sha512.update(data).digest('hex');
  const filename: string = `${baseNameCap}.${hash}${extname}`;

  const hashFilename: string = md5.update(filename).digest('hex');
  const dir1: string = hashFilename.substring(0, 1);
  const dir2: string = hashFilename.substring(0, 2);
  const url: string = `https://huiji-public.huijistatic.com/dota2/uploads/${dir1}/${dir2}/${filename}`;

  return {
    filePath,
    filename,
    hash,
    url,
  };
}
