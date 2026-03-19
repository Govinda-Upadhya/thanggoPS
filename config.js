import "dotenv/config";
export const db_url = process.env.MONGODB;
export const JWT_SECRET = process.env.JWT_SECRET;
export const APP_PASS = process.env.APP_PASS;
export const APP_EMAIL = process.env.EMAIL;
export const PORT = process.env.PORT;
export const BASE_URL = process.env.BASE_URL;
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
