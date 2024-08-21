const express = require('express');
const app = express();
const path = require('path');

const PORT = 3003;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/views")));

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/About', (req, res) => {
    res.render('About');
});

app.get('/Services', (req, res) => {
    res.render('Services');
});

app.get('/Portfolio', (req, res) => {
    res.render('Portfolio');
});

app.get('/Footer', (req, res) => {
    res.render('Footer');
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});







