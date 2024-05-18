import { connect, set } from "mongoose";
const config = require("./default.json");
const isDevEnv = process.env.NODE_ENV !== 'production';
set('autoCreate', true)
set('autoIndex', true)
set('debug', isDevEnv);

export default async () => {
  try {
    const mongoURI: string = process.env.MONGODB_URL || config.mongoURI;
    await connect(mongoURI);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};