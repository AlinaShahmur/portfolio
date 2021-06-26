const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('config');
require('./configs/database');
const PORT = config.get('port')||8000
const projectsRouter = require('./routes/projects')

app.use('/api/projects', projectsRouter)
app.listen(PORT, () => console.log(`listening on port ${PORT}`));


