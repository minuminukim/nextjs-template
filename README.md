# nextjs template (/app)

## Getting started

Install dependencies

```
pnpm install
```

Start database

```
docker compose up -d
```

Update env variables and push schema

```
cp .env.example .env
pnpm prisma db push
```

Start development server

```
pnpm dev
```
