import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure Cloudinary keys are available even if this module is imported before server bootstrap.
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env'), override: true });

let hasBeenConfigured = false;

const ensureCloudinaryConfigured = () => {
  const cloudName = String(process.env.CLOUDINARY_CLOUD_NAME || '').trim();
  const apiKey = String(process.env.CLOUDINARY_API_KEY || '').trim();
  const apiSecret = String(process.env.CLOUDINARY_API_SECRET || '').trim();
  const isCloudinaryReady = Boolean(cloudName && apiKey && apiSecret);

  if (isCloudinaryReady && !hasBeenConfigured) {
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });

    hasBeenConfigured = true;
  }

  return isCloudinaryReady;
};

export { cloudinary, ensureCloudinaryConfigured };
