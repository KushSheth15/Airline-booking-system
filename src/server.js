const express = require('express');
const { ServerConfig } = require('./config/index');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT , ()=>{
    console.log(`🚀 Successfully started Server at ${ServerConfig.PORT}`);
})