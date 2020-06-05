require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render(`index`, {
        name: 'Petshop',
    });
});

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));