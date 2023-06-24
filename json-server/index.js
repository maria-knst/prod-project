const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// This is for fake request time
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 1000);
    });
    next();
});

// This is check user authorization
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AuTH ERROR' });
    }
    next();
});

server.use(jsonServer.defaults());
server.use(router);

// Endpoint for login
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
        return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

// start server
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
