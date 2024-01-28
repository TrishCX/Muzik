export interface AccessToken {
  clientId?: string;
  accessToken?: string;
  accessTokenExpirationTimestampMs?: number;
  isAnonymous?: boolean;
}

export async function getAccessToken() {
  const URL: string = `https://open.spotify.com/get_access_token`;

  const request = await fetch(URL);
  const response = await request.json();
  return response as AccessToken;
}
