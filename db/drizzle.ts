import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon("postgresql://qori_owner:2mHlLjSCUd6X@ep-damp-lake-a5yivrjm.us-east-2.aws.neon.tech/qori?sslmode=require");
const db = drizzle(sql, { schema });

export default db;
