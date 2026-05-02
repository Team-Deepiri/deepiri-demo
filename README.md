# Deepiri Demo Repo

For CI/CD demo testing and IT training.

[![CI](https://github.com/Team-Deepiri/deepiri-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Team-Deepiri/deepiri-demo/actions/workflows/ci.yml)
[![Security](https://github.com/Team-Deepiri/deepiri-demo/actions/workflows/security.yml/badge.svg)](https://github.com/Team-Deepiri/deepiri-demo/actions/workflows/security.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-20.x-green)](https://nodejs.org/)

## Features

- GitHub Actions CI/CD pipelines
- Automated linting and formatting
- Security scanning
- Lighthouse performance audits
- Pre-commit hooks with Husky

## Getting Started

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Run formatting check
npm run format:check

# Format code
npm run format

# Run tests
npm test
```

## CI/CD Pipeline

This repo includes several GitHub Actions workflows:

- **CI** — Linting, formatting, and testing on every push/PR
- **Security** — Dependency scanning and CodeQL analysis
- **Lighthouse Audit** — Performance auditing
- **Proof HTML** — HTML validation
- **Auto Assign** — Auto-assign issues and PRs

## License

MIT License — see [LICENSE](LICENSE) for details.
