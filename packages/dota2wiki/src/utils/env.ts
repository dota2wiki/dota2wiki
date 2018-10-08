/**
 * If production build or not
 */
export const isProduction: boolean = process.env.NODE_ENV === 'production';

/**
 * the public path
 */
export const baseUrl: string = process.env.BASE_URL as string;

export type Platform = 'gh-pages' | 'cloud' | 'huiji';
export const platform: Platform = process.env.VUE_APP_PLATFORM as Platform;
