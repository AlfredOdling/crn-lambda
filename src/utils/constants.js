const ngrok = 'https://1837f4c1.ngrok.io'
const netlify = 'https://nifty-dijkstra-5d4938.netlify.com'

export const NETLIFY_URL = netlify + '/.netlify/functions/graphql'
export const NGROK_URL = ngrok + '/.netlify/functions/graphql'
export const NODE_ENV = 'DEVELOPMENT'
export const APOLLO_CLIENT_URI =
  NODE_ENV === 'DEVELOPMENT' ? NGROK_URL : NETLIFY_URL

export const ENGINE_API_KEY = 'service:AlfredOdling-3783:_5bAC7Q-cWxmC4RV0Cy0kw'
