
const express = require('express');
const app = express();
const config = require('config');
require('./configs/database');
const PORT = config.get('port')||8000
const mailRouter = require('./routes/mails')
const projectsRouter = require('./routes/projects')
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use('/api/projects', projectsRouter)
app.use('/api/mails', mailRouter)
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
