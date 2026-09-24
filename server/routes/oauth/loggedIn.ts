export default defineEventHandler(async (event) => {
    await requireUserSession(event)
    setResponseStatus(event, 200);
    return "";
});