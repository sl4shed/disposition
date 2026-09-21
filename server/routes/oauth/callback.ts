export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { code, state } = getQuery(event);
    const savedState = getCookie(event, "oauth_state");
    deleteCookie(event, "oauth_state");

    if(!code || !state || state !== savedState) {
        throw createError({
            statusCode: 401,
            statusMessage: "Invalid OAuth State"
        })
    }

    const tokens = await $fetch<{ access_token: string; refresh_token: string }>(
        "https://auth.hackclub.com/oauth/token",
        {
            method: 'POST',
            body: {
                client_id: config.hackclub.clientId,
                client_secret: config.hackclub.clientSecret,
                redirect_uri: `${config.public.baseUrl}/oauth/callback`,
                code,
                grant_type: "authorization_code",
            }
        }
    );

    const identity = await $fetch<any>("https://auth.hackclub.com/api/v1/me", {
        headers: {
            Authorization: `Bearer ${tokens.access_token}`
        }
    });

    console.log(identity);

    return sendRedirect(event, '/');
});