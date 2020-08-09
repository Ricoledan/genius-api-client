const axios = require('axios')
require('dotenv').config()

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'https://api.genius.com/',
  headers: {
    Authorization: process.env.BEARER_TOKEN,
    'content-type': 'application/json',
    useQueryString: true,
  },
  data: {
    code: '',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: 'http://example.com/',
    response_type: 'code',
    grant_type: 'authorization_code',
  },
})

const getArtist = (name) =>
  HTTPClient({
    url: 'search',
    params: {
      q: `${name}`,
    },
  })
    .then((response) => {
      // all data
      console.log(JSON.stringify(response.data.response.hits, null, 2))
      // select data
      let i
      for (i = 0; i < response.data.response.hits.length; i++) {
        console.log(
          'title:',
          response.data.response.hits[i].result.title,
          'song_id:',
          response.data.response.hits[i].result.id,
          'lyrics_url:',
          response.data.response.hits[i].result.url
        )
      }
    })
    .catch((error) => {
      console.log(error.response)
    })

const getSong = (songId) =>
  HTTPClient({
    url: `songs/${songId}`,
  })
    .then((response) => {
      // all data
      console.log(JSON.stringify(response.data.response.song, null, 2))
    })
    .catch((error) => {
      console.log(error.response)
      // grab media links
    })

getArtist('Kendrick Lamar')
getSong('3039923')
