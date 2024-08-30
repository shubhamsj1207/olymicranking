const express = require('express');
require("../src/db/conn");
const router = require('./router/men');
const routercustomer = require('./router/customer');
const app = express();

const port = 1002; 


app.use(express.json());

app.use(router);
app.use(routercustomer);


app.listen(port,()=>{
    console.log(`connection is live at port no ${port}`);
})  