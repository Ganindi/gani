const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

let users = {
    'user1': 'password1',
    'user2': 'password2'
};

let tasks = [];

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('index', { username: req.session.username, tasks });
    } else {
        res.redirect('/login');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] === password) {
        req.session.username = username;
        res.redirect('/');
    } else {
        res.send('Invalid credentials');
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!users[username]) {
        users[username] = password;
        res.redirect('/login');
    } else {
        res.send('Username already exists');
    }
});

app.post('/add_task', (req, res) => {
    if (req.session.username) {
        const task = req.body.task;
        tasks.push(task);
        res.redirect('/');
    }
});

app.post('/delete_task/:id', (req, res) => {
    const taskIndex = tasks.indexOf(req.body.id);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        res.redirect('/');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});