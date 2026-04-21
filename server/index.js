import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDb from './config/db.js';
import adminAuthRouter from './routes/adminAuth.js';
import adminEventsRouter from './routes/adminEvents.js';
import ensureDefaultAdmin from './utils/ensureDefaultAdmin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from project root first, then allow server/.env to override when present.
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '.env'), override: true });

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const configuredClientOrigin = String(process.env.CLIENT_ORIGIN || '').trim();
const staticAllowedOrigins = [
  configuredClientOrigin,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
].filter(Boolean);
const localLanOriginPattern = /^http:\/\/192\.168\.\d+\.\d+:(5173|5174)$/;

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (staticAllowedOrigins.includes(origin) || localLanOriginPattern.test(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json());

app.use((req, res, next) => {
  const requestStartedAt = Date.now();

  res.on('finish', () => {
    if (res.statusCode >= 400) {
      const elapsedMs = Date.now() - requestStartedAt;
      console.error(
        `[API ERROR] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${elapsedMs}ms)`
      );
    }
  });

  next();
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running.',
  });
});

app.use('/api/admin', adminAuthRouter);
app.use('/api/admin', adminEventsRouter);
// Backward compatibility for stale frontend bundles that may call /api/api/admin/*.
app.use('/api/api/admin', adminAuthRouter);
app.use('/api/api/admin', adminEventsRouter);

app.use('/api', (req, res) => {
  console.error(`[API 404] ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: 'The requested route could not be found.',
    path: req.originalUrl,
  });
});

app.use((error, req, res, _next) => {
  console.error(`[API EXCEPTION] ${req.method} ${req.originalUrl}`, error);

  if (res.headersSent) {
    return;
  }

  res.status(500).json({
    success: false,
    message: 'Internal server error.',
  });
});

const startServer = async () => {
  try {
    await connectDb();
    await ensureDefaultAdmin();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
