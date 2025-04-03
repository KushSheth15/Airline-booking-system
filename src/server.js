const express = require('express');
const { ServerConfig } = require('./config/index');
const apiRoutes = require('./routes');
const Crons = require('./utils/common/cron-jobs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT , ()=>{
    console.log(`🚀 Successfully started Server at ${ServerConfig.PORT}`);
    Crons();
})