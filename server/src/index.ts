import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import projectRoutes from "./routes/projectRoutes.js"

// Load env vars
dotenv.config()

const app = express()
const PORT =8000

// ─── Middleware ───────────────────────────────────────────────
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// ─── Health check ─────────────────────────────────────────────
app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})
app.use("/projects",projectRoutes);

// ─── Start server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(` Server running on ${PORT}`)
})
