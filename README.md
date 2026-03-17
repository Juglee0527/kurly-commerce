# Kurly Commerce Platform

A portfolio-oriented ecommerce platform inspired by Kurly's product experience, delivery-centric commerce flow, and operational scale.

This repository is organized as a monorepo and is currently focused on establishing a clean engineering foundation across backend, frontend, infrastructure, and documentation. The current stage contains project scaffolding and environment setup only. Business features are intentionally deferred until the base architecture is stable.

## Project Overview

The goal of this project is to build a modern commerce platform that demonstrates practical full-stack engineering skills across API design, data modeling, event-driven integration, frontend architecture, and local development infrastructure.

This project is being structured to highlight:

- Scalable backend design with Spring Boot
- Modern frontend development with Next.js App Router
- Local development infrastructure with Docker Compose
- Clean separation of application, infrastructure, and documentation concerns

## Tech Stack

### Backend

- Java 21
- Gradle
- Spring Boot 3.x
- Spring Web
- Spring Data JPA
- QueryDSL
- Spring Security
- Spring Validation
- MySQL
- Redis
- Kafka
- Lombok

### Frontend

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- ESLint

### Infrastructure

- Docker Compose
- MySQL
- Redis
- Kafka
- Zookeeper
- Nginx
- Kubernetes manifests for deployment placeholders

## Directory Structure

```text
.
|-- backend/
|   |-- build.gradle
|   |-- settings.gradle
|   `-- src/
|       |-- main/
|       |   |-- java/com/kurly/commerce/
|       |   |   |-- api/
|       |   |   |-- domain/
|       |   |   `-- infrastructure/
|       |   `-- resources/
|       `-- test/
|-- frontend/
|   |-- src/
|   |   |-- app/
|   |   |-- components/
|   |   |-- features/
|   |   |-- hooks/
|   |   `-- lib/
|   |-- package.json
|   `-- tsconfig.json
|-- infra/
|   |-- docker-compose.yml
|   |-- deployments/
|   |-- k8s/
|   `-- nginx/
`-- docs/
    |-- api/
    |-- architecture.md
    `-- deployment.md
```

## Development Goals

- Build a maintainable ecommerce backend with clear domain boundaries
- Design a frontend structure suitable for scalable feature development
- Establish local infrastructure for data storage, caching, and messaging
- Prepare the codebase for future expansion into order, catalog, user, and promotion domains
- Demonstrate production-minded engineering practices in a portfolio-friendly format

## How To Run

The project is currently in the scaffold stage, so the commands below are basic placeholders for local setup.

### 1. Start local infrastructure

```bash
cd infra
docker compose up -d
```

### 2. Run backend

```bash
cd backend
./gradlew bootRun
```

On Windows PowerShell:

```powershell
cd backend
.\gradlew.bat bootRun
```

### 3. Run frontend

```bash
cd frontend
npm install
npm run dev
```

## Current Status

- Monorepo structure initialized
- Spring Boot backend base configuration added
- Next.js frontend base configuration added
- Local development Docker Compose added
- Project documentation scaffolded

## Roadmap

- Core domain modeling
- Authentication and authorization
- Product, cart, and order flows
- Event-driven integration with Kafka
- Deployment pipeline and environment configuration
