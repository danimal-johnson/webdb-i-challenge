const express = require('express');

const AccountsRouter = require('./accounts/accounts-router.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
  res.send('<h3>Account database is running. Welcome.</h3>');
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  })
})

module.exports = server;
