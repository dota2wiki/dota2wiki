import path from 'path';

/**
 * Resolve relative path to absolute path.
 * @param paths parts of relative path
 */
export default function(...paths: string[]): string {
  return path.resolve(__dirname, '..', ...paths);
}
