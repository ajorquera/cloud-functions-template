const express = require('express')
const funcName = process.argv[2]
const app = require(`./${funcName}`)

const port = process.env.PORT || 3000
const message = `${funcName} endpoints are listening on port ${port}!`

app.use(express.json())
app.listen(port, () => console.log(message))
