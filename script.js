// Hardcoded secret (CodeQL can flag this)
const secret_key = '12345-ABCDE';

// Dangerous eval
function evaluateInput(input) {
  return eval(input);
}

// Command injection (Node.js)
const { exec } = require('child_process');
function runCommand(userInput) {
  exec("ls " + userInput, (err, stdout, stderr) => {
    console.log(stdout);
  });
}

// Insecure HTTP (not HTTPS)
const http = require('http');
function fetchData() {
  http.get('http://example.com', (res) => {
    console.log(res.statusCode);
  });
}

// SQL injection example
function getUser(db, username) {
  const query = "SELECT * FROM users WHERE name = '" + username + "'";
  return db.query(query);
}

// Prototype pollution risk
function merge(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
  return target;
}

// Weak randomness
function generateToken() {
  return Math.random().toString(36).substring(2);
}

// Hardcoded credentials
const password = "super_secret_password";

// Path traversal
const fs = require('fs');
function readFile(userPath) {
  return fs.readFileSync("/app/data/" + userPath, "utf8");
}