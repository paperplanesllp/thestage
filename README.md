# The Stage

This project now includes:

- Vite + React frontend
- Express + MongoDB backend for admin login

## Environment setup

1. Copy `.env.example` to `.env` (if not already present).
2. Update these values in `.env`:
	- `MONGO_URI`
	- `ADMIN_USERNAME`
	- `ADMIN_PASSWORD`

When the backend starts, it will auto-create the default admin user if it does not exist.

## Run the app

Frontend (Vite):

```bash
npm run dev
```

Backend (Express API):

```bash
npm run server
```

Optional backend watch mode:

```bash
npm run dev:server
```

Admin login endpoint:

- `POST /api/admin/login`

Health check endpoint:

- `GET /api/health`
