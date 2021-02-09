//MAIN
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  credentialsDecrypt = "Basic " + btoa(`${clientId}:${clientSecret}`),
  tokenUrl = process.env.REACT_APP_SPOTIFY_TOKEN_URL,
  scopes = "user-read-private%20user-read-email%20user-top-read",
  // redirect_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
  // //ONLINE
  redirect_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI_ONLINE,
  authUrl = `${
    process.env.REACT_APP_SPOTIFY_AUTH_URL
  }?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirect_URI
  )}&scope=${scopes}&state=34fFs29kd09`,
  playlistUrl = "https://api.spotify.com/v1/browse/categories",
  searchUrl = "https://api.spotify.com/v1/search?q=",
  browseCatUrl = "https://api.spotify.com/v1/browse/categories/";

//REFRESH TOKEN
export const getRefreshToken = async (expiredToken) => {
  const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: credentialsDecrypt,
      },
      body: `grant_type=refresh_token&refresh_token=${expiredToken}`,
    }),
    result = await response.json();
  // console.log(result)
  return result.access_token;
};

//GET TOKEN
export const getAuthToken = async (code) => {
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: credentialsDecrypt,
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(
      redirect_URI
    )}`,
  });
  const result = await response.json();
  // console.log(result)
  return result;
};

//GET AUTHORIZED
export const getAuthorized = async () => {
  window.location.href = authUrl;
};

//GET CODE
export const getCode = () => {
  let params = new URLSearchParams(document.location.search.substring(1)),
    code = params.get("code");
  // console.log(code);
  return code;
};

//GET PLAYLIST
export const getPlaylist = async (token) => {
  const response = await fetch(playlistUrl, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }),
    result = await response.json();
  // console.log(result)
  return result;
};

//GET SEARCH
export const getSearch = async (token, query, type) => {
  const response = await fetch(`${searchUrl}${query}&type=${type}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }),
    result = await response.json();
  console.log(result);
  return result;
};

//GET BROWSE
export const getBrowse = async (token, categoryId) => {
  const response = await fetch(
      `${browseCatUrl}${categoryId}/playlists?country=US&limit=5&offset=0`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }
    ),
    result = await response.json();
  console.log(result);
  return result;
};

//GET TRACKS FROM PLAYLIST
export const getTracksPlaylist = async (token, url) => {
  const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }),
    result = await response.json();
  console.log(result);
  return result;
};
