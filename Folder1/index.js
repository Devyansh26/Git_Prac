const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    console.log("You have requested on home page!")
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));