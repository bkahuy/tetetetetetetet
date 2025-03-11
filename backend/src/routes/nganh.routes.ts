import { Hono } from "hono"

export const nganhRouter = new Hono()
    .get('/', (c) => {
        return c.json({ nganh: 'nganh' })
    })
    .post('/', (c) => {
        return c.json({})
    })
    // .delete
    // .put