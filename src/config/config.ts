import * as dotenve from "dotenv";

dotenve.config();

export const config = {
  mongoURI: process.env.MONGO_URI as string,
  port: 4000,
};
