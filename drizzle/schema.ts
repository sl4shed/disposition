import { mysqlTable, mysqlSchema, AnyMySqlColumn, char, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const rsvps = mysqlTable("rsvps", {
	hcaId: char("hca_id", { length: 16 }).primaryKey(),
	email: char({ length: 255 }).notNull(),
	slackId: char("slack_id", { length: 16 }).notNull(),
	timestamp: datetime().default(new Date("NULLZ")).generatedAlwaysAs(sql`current_timestamp()`, { mode: "virtual" }),
});
