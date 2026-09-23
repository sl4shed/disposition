import { rsvps } from "~~/db/schema";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    if (!session.user) { setResponseStatus(event, 401); return; }

    const rsvp: typeof rsvps.$inferInsert = {
        hcaId: session.user.id,
        slackId: session.user.slack_id,
        email: session.user.email
    };

    console.log("inserting rsvp into db");
    await db.insert(rsvps).values(rsvp);
    setResponseStatus(event, 200);
    return;
})