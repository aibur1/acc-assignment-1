const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/user.routes")
require("dotenv").config()


const app = express();
const port = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());

app.use("/user", usersRoute);

app.get("/", (req,res) => {
    res.send("Server is running")
})


app.all("*", (req, res) => {
    res.send("No route found");
})



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
