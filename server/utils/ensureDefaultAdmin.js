import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';

const ensureDefaultAdmin = async () => {
  const adminUsername = String(process.env.ADMIN_USERNAME || '').trim().toLowerCase();
  const adminPassword = String(process.env.ADMIN_PASSWORD || '').trim();

  if (!adminUsername || !adminPassword) {
    console.warn('Default admin not created. Set ADMIN_USERNAME and ADMIN_PASSWORD in .env.');
    return;
  }

  const existingAdmin = await Admin.findOne({ username: adminUsername }).select('+passwordHash');

  if (existingAdmin) {
    const passwordMatches = await bcrypt.compare(adminPassword, existingAdmin.passwordHash);

    if (!passwordMatches) {
      existingAdmin.passwordHash = await bcrypt.hash(adminPassword, 12);
      await existingAdmin.save();
      console.log(`Admin account "${adminUsername}" password synced from .env.`);
      return;
    }

    console.log(`Admin account "${adminUsername}" already exists.`);
    return;
  }

  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await Admin.create({
    username: adminUsername,
    passwordHash,
    role: 'admin',
  });

  console.log(`Default admin account "${adminUsername}" created.`);
};

export default ensureDefaultAdmin;
