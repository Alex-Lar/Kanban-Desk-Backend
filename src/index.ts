import express, { Request, Response } from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
const app = express()

const PORT = 3000

app.get('/ping', (req: Request, res: Response) => {
  res.send('PING')
})

app.use("/trpc", trpcExpress.createExpressMiddleware({
  router: trpcRouter
}));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
