const ngrok = 'http://40b3210c.ngrok.io'

export const NETLIFY_URL = 'https://nifty-dijkstra-5d4938.netlify.com/.netlify/functions/graphql'
export const NGROK_URL = ngrok + '/.netlify/functions/graphql'
export const NODE_ENV = 'DEVELOPMENT'
export const APOLLO_CLIENT_URI = NODE_ENV === 'DEVELOPMENT' ? NGROK_URL : NETLIFY_URL
