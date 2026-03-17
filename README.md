# kurly-commerce

Kurly-style ecommerce monorepo scaffold.

This repository currently contains only the initial project structure and placeholder files.
Business logic, domain modeling, and feature implementation are intentionally not added yet.

## Monorepo Structure

```text
.
|-- backend/
|   |-- build.gradle
|   |-- settings.gradle
|   `-- src/
|       |-- main/
|       |   |-- java/
|       |   `-- resources/
|       `-- test/
|           `-- java/
|-- frontend/
|   |-- app/
|   |-- public/
|   |-- next.config.ts
|   |-- package.json
|   `-- tsconfig.json
|-- infra/
|   |-- deployments/
|   |   |-- dev/
|   |   `-- prod/
|   |-- k8s/
|   |-- nginx/
|   `-- docker-compose.yml
`-- docs/
	|-- api/
	|-- architecture.md
	`-- deployment.md
```

## Directory Overview

- `backend`: Spring Boot project skeleton and backend source tree placeholders.
- `frontend`: Next.js project skeleton and frontend app placeholders.
- `infra`: Local container orchestration and deployment configuration placeholders.
- `docs`: Documentation placeholders for architecture, API, and deployment.

## Current Scope

- Initial monorepo folder layout
- Basic build and config placeholders
- Documentation scaffolding

## Not Included Yet

- Business logic
- API endpoints
- UI screens and components
- Database schema and integrations
- Production-ready infrastructure hardening
