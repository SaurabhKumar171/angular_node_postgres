const express = require("express")
const app = express()
const cors = require('cors');

require('dotenv').config()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//importing pool obj to connect db
const pool = require("./config/database.js")

const routes = require("./routes/product.routes.js")

app.use('/api/v1', routes);

app.get("/",(req,res)=>{
    res.send("Angular node crud");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });