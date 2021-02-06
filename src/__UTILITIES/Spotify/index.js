//MAIN
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    tokenUrl = process.env.REACT_APP_SPOTIFY_TOKEN_URL,
    scopes = 'user-read-private%20user-read-email%20user-top-read',
    authUrl = `${process.env.REACT_APP_SPOTIFY_AUTH_URL}?client_id=${clientId}&response_type=token&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${scopes}&show_dialog=true`

export const getRefreshToken = async () => {
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
        },
        body: 'grant_type=client_credentials',
    }),
        result = await response.json()
    console.log(result)
    return result.access_token
}

export const getToken = () => {
    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
    const token = hash.access_token
    return token
}

export const getAuthorized = () => {
    window.location.href = authUrl
}