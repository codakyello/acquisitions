import { db } from './src/config/database.js';
import { sql } from './src/config/database.js';

// Check if users table exists
const result = await sql`
  SELECT table_name 
  FROM information_schema.tables 
  WHERE table_schema = 'public'
`;

console.log('Tables in database:', result);
