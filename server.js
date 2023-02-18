const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());

const port = process.env.SERVER_PORT || 8000;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.route('/campgrounds', async (req, res) =>{
     console.log("hello")
})

app.listen(port, () => console.log(`Listening on port ${port}`));
