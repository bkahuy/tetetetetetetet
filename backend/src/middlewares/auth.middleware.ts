import { Context, Next } from 'hono';
export const authMiddleware = async (c: Context, next: Next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || authHeader !== 'Bearer secret_token') {
        return c.json({ error: 'Unauthorized' }, 401);
    }
    await next();
};