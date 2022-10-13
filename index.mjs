import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    const message = `Hello World, from ${os.hostname()}`
})

app.listen(PORT, () => {
    console.log(`Web Server is listening on PORT ${PORT}`)
    console.log(os.hostname())
})