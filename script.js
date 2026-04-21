const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/run', (req, res) => {
  const userInput = req.query.cmd;

  // 🔥 Command injection
  exec("ls " + userInput, (err, stdout, stderr) => {
    res.send(stdout);
  });
});

app.get('/eval', (req, res) => {
  // 🔥 Code injection
  const result = eval(req.query.code);
  res.send(result);
});

app.listen(3000);