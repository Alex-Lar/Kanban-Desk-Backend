import { initTRPC } from '@trpc/server'

const todos = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: true },
  { id: 3, title: 'Todo 3', completed: false },
  { id: 4, title: 'Todo 4', completed: true },
  { id: 5, title: 'Todo 5', completed: false },
  { id: 6, title: 'Todo 6', completed: true },
  { id: 7, title: 'Todo 7', completed: false },
  { id: 8, title: 'Todo 8', completed: true },
  { id: 9, title: 'Todo 9', completed: false },
  { id: 10, title: 'Todo 10', completed: true },
  { id: 11, title: 'Todo 11', completed: false },
]

/**
 * Initialization of tRPC backend
 */
const trpc = initTRPC.create()

// Fake api routes for testing tRPC
export const trpcRouter = trpc.router({
  getTodos: trpc.procedure.query(() => {
    return { todos }
  }),
})

export type TrpcRouter = typeof trpcRouter
