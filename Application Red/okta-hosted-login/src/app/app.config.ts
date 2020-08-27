export default {
  oidc: {
    clientId: '0oaocob0gyJXXOKSp4x6',
    issuer: 'https://dev-631528.okta.com/oauth2/default',
    redirectUri: 'https://172.30.8.28/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  },
  resourceServer: {
    messagesUrl: 'http://win-l5ncfdjkr8f.okta-idento.fr/api/messages',
  },
};
