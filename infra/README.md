# Infrastructure

Local development infrastructure for the Kurly-style ecommerce platform.

## Included Services

- MySQL on `3306`
- Redis on `6379`
- Zookeeper on `2181`
- Kafka on `9092`

All services run on the shared Docker network `kurly-commerce-network`, so they are connectable from other containers by service name.

## How To Run

From the `infra` directory:

```bash
docker compose up -d
```

To stop the services:

```bash
docker compose down
```

To stop and remove volumes as well:

```bash
docker compose down -v
```

## Connection Info

If the backend runs on your host machine:

- MySQL: `jdbc:mysql://localhost:3306/kurly_commerce`
- Redis: `localhost:6379`
- Kafka: `localhost:9092`
- Zookeeper: `localhost:2181`

If the backend runs as another container on the same compose network:

- MySQL: `mysql:3306`
- Redis: `redis:6379`
- Kafka: `kafka:29092`
- Zookeeper: `zookeeper:2181`

## Default Credentials

- MySQL database: `kurly_commerce`
- MySQL user: `kurly`
- MySQL password: `kurly`
- MySQL root password: `root`

## Notes For Local Development

- The compose file is tuned for local development, not production.
- Kafka exposes `9092` for host access and advertises `kafka:29092` for container-to-container access.
- MySQL and Redis use Docker volumes so data persists across container restarts.
