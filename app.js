const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");


app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use("/js",express.static(path.join(__dirname,"./js")))
app.get("/", function(req,res) {
    res.render("index", {
    pageTitle: "Lekcja 01"
} );
})

app.listen(port, (err) => {
    if (err)  { return console.log(`Błąd ${err}`)} // obsługa błędu
    console.log(`Serwer jest uruchomiony na porcie ${port}`);
})

