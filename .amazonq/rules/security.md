# Security Guidelines

## Credentials
- Never hardcode credentials, API keys, or secrets
- Use environment variables or AWS Secrets Manager
- Add sensitive files to .gitignore

## Input Validation
- Validate and sanitize all user inputs
- Use parameterized queries for database operations
- Implement proper error handling without exposing sensitive info

## Dependencies
- Keep dependencies up to date
- Review security advisories regularly
- Use lock files (package-lock.json, Pipfile.lock)
