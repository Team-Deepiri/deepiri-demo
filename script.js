const express = require('express');
const { exec } = require('child_process');
const rateLimit = require('express-rate-limit');

const app = express();

const runLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});

app.get('/run', runLimiter, (req, res) => {
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