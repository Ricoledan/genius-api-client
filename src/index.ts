const axios = require('axios')
require('dotenv').config()

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'https://api.genius.com/',
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
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

const getArtistIdDetails = (name: string) =>
  HTTPClient({
    url: 'search',
    params: {
      q: `${name}`,
      text_format: 'plain',
    },
  })
    .then((response) =>
      console.log({
        id: String(response.data.response.hits[0].result.primary_artist.id),
        songs: getSongDetails(response.data.response.hits),
      })
    )
    .catch((error) => {
      console.log(error.response)
    })

function getSongDetails(response) {
  let i,
    obj = []
  for (i = 0; i < response.length; i++) {
    console.log(response[i].result)
    obj.push({
      song_id: response[i].result.id,
      full_song_title: response[i].result.title_with_featured,
      song_title: response[i].result.title,
      song_art_image_thumbnail: response[i].result.song_art_image_thumbnail_url,
      song_art_image_url: response[i].result.song_art_image_url,
    })
  }
  return obj
}

const getArtistDetails = (id: string) => {
  HTTPClient({
    url: `/artists/${id}`,
    params: {
      text_format: 'plain',
    },
  })
    .then((response) =>
      console.log({
        bio: response.data.response.artist.description.plain,
        alias: response.data.response.artist.alternate_names,
        social_media: {
          facebook: response.data.response.artist.facebook_name,
          instagram: response.data.response.artist.instagram_name,
          twitter: response.data.response.artist.twitter_name,
        },
      })
    )
    .catch((error) => {
      console.log(error.response)
    })
}

getArtistIdDetails('Kendrick Lamar')
getArtistDetails('1421')
