# Auth0 Example of Getting Access Token and Calling API

This example is using an API that is not publicly available. Substitute your own api to use.


## Usage

Create a `config.js` in project root.
```js
const config = {
  client_id: 'your client_id from Auth0 application',
  client_secret: 'your client_secret from Auth0 application',
  audience: 'your audiance (aka Identifier) from Auth0 API',
  url: 'https://your-auth0-tenant-name.auth0.com/oauth/token',
  getUrl: 'url to your api endpoint'
}

export default config
```