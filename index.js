const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/about", (req, res) => {
    res.send("About page")

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));