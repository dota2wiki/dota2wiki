/**
 * If production build or not
 */
export const isProduction: boolean = process.env.NODE_ENV === 'production';

/**
 * the public path
 */
export const baseUrl: string = process.env.BASE_URL as string;
