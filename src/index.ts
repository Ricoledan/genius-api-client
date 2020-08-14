import axios from 'axios'
import * as dotenv from 'dotenv'
import { AllSongDetails, Search, Artist, Song } from './types'
dotenv.config()

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
    response_type: 'code',
    grant_type: 'authorization_code',
  },
})

function getAllSongDetails(response): AllSongDetails[] {
  let i: number
  const obj = []
  for (i = 0; i < response.length; i++) {
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

const getArtistIdDetails = (name: string) =>
  HTTPClient({
    url: 'search',
    params: {
      q: `${name}`,
      text_format: 'plain',
    },
  })
    .then(
      (response): Search => ({
        id: String(response.data.response.hits[0].result.primary_artist.id),
        songs: getAllSongDetails(response.data.response.hits),
      })
    )
    .catch((error) => {
      error.response
    })

const getArtistDetails = (id: string) => {
  HTTPClient({
    url: `/artists/${id}`,
    params: {
      text_format: 'plain',
    },
  })
    .then(
      (response): Artist => ({
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
      error.response
    })
}

const getSongDetails = (id: string) => {
  HTTPClient({
    url: `/songs/${id}`,
    params: {
      text_format: 'plain',
    },
  })
    .then(
      (response): Song => ({
        title: response.data.response.song.full_title,
        apple_id: response.data.response.song.apple_music_id,
        apple_player: response.data.response.song.apple_music_player_url,
        description: response.data.response.song.description.plain,
        album: response.data.response.song.album.name,
      })
    )
    .catch((error) => {
      error.response
    })
}

export { getArtistIdDetails, getArtistDetails, getSongDetails }
