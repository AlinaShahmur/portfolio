const express = require('express');
const app = express();
const config = require('config');
const path = require('path');
require('./configs/database');
const PORT = process.env.PORT || config.get('port')
const mailRouter = require('./routes/mails')
const projectsRouter = require('./routes/projects')
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use('/api/projects', projectsRouter)
app.use('/api/mails', mailRouter)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
