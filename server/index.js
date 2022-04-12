const express = require('express')
const port = 8060
require('./dbConfig/db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({origin : "*"}))

app.use('/api/inovators', require('./Router/InovatorRegister'))
app.use('/api/inovators', require('./Router/FormInvatorRoute'))
app.use('/api/bdm', require('./Router/ReportRoute'))
app.use('/api/bdm', require('./Router/ProjectRoute'))
app.use('/api/bdm', require('./Router/RequestsRoute'))


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})