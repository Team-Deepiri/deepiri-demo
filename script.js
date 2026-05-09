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
  // Treat user input as data, not executable code
  const result = String(req.query.code ?? '');
  res.send(result);
});

app.listen(3000);