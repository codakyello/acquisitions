import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Create Neon SQL client
const sql = neon(process.env.DATABASE_URL);

// Create Drizzle instance
const db = drizzle(sql);

export {db, sql};