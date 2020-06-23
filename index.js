const { createAppAuth } = require("@octokit/auth-oauth-app");

const auth = createOAuthAppAuth({
    clientId: "123",
    clientSecret: "secret",
  });
  
  // OAuth Apps authenticate using Basic auth, where
  // username is clientId and password is clientSecret
  const appAuthentication = await auth({
    type: "oauth-app",
  });
  // resolves with
  // {
  //   type: 'oauth-app',
  //   clientId: process.env.CLIENT_ID,
  //   clientSecret: process.env.CLIENT_SECRET,
  //   headers: {
  //     authorization: 'basic MTIzOnNlY3JldA=='
  //   }
  // }
  
  const tokenAuthentication = await auth({
    type: "token",
    code: "random123", // code from OAuth web flow, see https://git.io/fhd1D
    state: "mystate123",
  });
  // resolves with
  // {
  //   type: 'token',
  //   tokenType: 'oauth',
  //   token: '...', /* the created oauth token */
  //   scopes: [] /* depend on request scopes by OAuth app */
  // }
