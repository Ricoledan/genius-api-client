# Genius API Client

## Documentation

[Genius.com API Documentation](https://docs.genius.com/#/getting-started-h1)

## Supported Resources

### Search

```
getArtistIdDetails('Tupac')

Request: GET /search
Response:
 id: '59',
  songs: [
    {
      song_id: 320,
      full_song_title: "Hit 'Em Up (Ft. Outlawz)",
      song_title: 'Hit ’Em Up',
      song_art_image_thumbnail: 'https://images.genius.com/a6d7f93a83ec4f3dde28a749c01a6465.300x300x1.jpg',
      song_art_image_url: 'https://images.genius.com/a6d7f93a83ec4f3dde28a749c01a6465.480x480x1.jpg'
    },
    ...
  ]

```

### Artists

```
getArtistDetails('59')

Request: GET /artists/:id
Response:
{
  bio: 'Tupac Amaru Shakur (June 16, 1971 – September 13, 1996), known by his stage names 2Pac and Makaveli, was an actor and a highly influential rapper who is considered by many to be the greatest of all-time due to the revolutionary spirit and thug passion he mixed into his music. During his music career, he made appearances in movies such as his acclaimed debut in Juice (1992), Poetic Justice (1993), and Above the Rim (1994).\n' +
  ...
  alias: [
    'Pac',
    'MC New York',
    'Makaveli',
    'Tupac Shakur',
    'Makaveli the Don',
    'Lesane P. Crooks',
    '2Pac Shakur',
    'Tupac Amaru Shakur',
    'Lesane Parish Crooks',
    'Tupac'
  ],
  social_media: { facebook: 'tupacshakur', instagram: '2pac', twitter: '2pac' }
```

### Songs

```
getSongDetails('320')

Request: GET /songs/:id
Response:
{
  title: "Hit 'Em Up by 2Pac (Ft. Outlawz)",
  apple_id: '310908421',
  apple_player: 'https://genius.com/songs/320/apple_music_player',
  description: 'Arguably the most memorable diss track of the East Coast–West Coast rivalry; 2Pac and The Outlawz take aim at The Notorious B.I.G., Diddy, and Mobb Deep, with direct threats of violence.\n' +
  ...
,
  album: 'Greatest Hits'
}
```

## Client Access Token

Generate access token from the Manage Clients Dashboard

[Getting an Access Token](https://docs.genius.com/#/authentication-h1)

## Soon to be supported Resources

### annotations

### referents

### web pages

## Not Planning to Support

### account
