import mongoose from 'mongoose';

const connectDb = async () => {
  const { MONGO_URI } = process.env;

  if (!MONGO_URI) {
    throw new Error('MONGO_URI is missing. Add it in your .env file.');
  }

  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected successfully.');
};

export default connectDb;
