import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://qori_owner:2mHlLjSCUd6X@ep-damp-lake-a5yivrjm.us-east-2.aws.neon.tech/qori?sslmode=require",
    },
} satisfies Config;