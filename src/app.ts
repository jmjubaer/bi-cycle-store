import express from 'express';
const app = express()

app.get('/', (req, res) => {
  res.send('By-cycle store server is running')
})

export default app;