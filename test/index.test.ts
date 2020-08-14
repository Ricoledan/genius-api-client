const mockGetArtistIdDetails = jest.fn()
mockGetArtistIdDetails.mockReturnValueOnce({
  id: '59',
  songs: [
    {
      song_id: 320,
      full_song_title: "Hit 'Em Up (Ft. Outlawz)",
      song_title: 'Hit ’Em Up',
      song_art_image_thumbnail:
        'https://images.genius.com/a6d7f93a83ec4f3dde28a749c01a6465.300x300x1.jpg',
      song_art_image_url:
        'https://images.genius.com/a6d7f93a83ec4f3dde28a749c01a6465.480x480x1.jpg',
    },
  ],
})

const mockGetArtistDetails = jest.fn()
mockGetArtistDetails.mockReturnValueOnce({
  bio:
    'Tupac Amaru Shakur (June 16, 1971 – September 13, 1996), known by his stage names 2Pac and Makaveli, was an actor and a highly influential rapper who is considered by many to be the greatest of all-time due to the revolutionary spirit and thug passion he mixed into his music. During his music career, he made appearances in movies such as his acclaimed debut in Juice (1992), Poetic Justice (1993), and Above the Rim (1994).\n',
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
    'Tupac',
  ],
  social_media: { facebook: 'tupacshakur', instagram: '2pac', twitter: '2pac' },
})

const mockGetSongDetails = jest.fn()
mockGetSongDetails.mockReturnValueOnce({
  title: "Hit 'Em Up by 2Pac (Ft. Outlawz)",
  apple_id: '310908421',
  apple_player: 'https://genius.com/songs/320/apple_music_player',
  description:
    'Arguably the most memorable diss track of the East Coast–West Coast rivalry; 2Pac and The Outlawz take aim at The Notorious B.I.G., Diddy, and Mobb Deep, with direct threats of violence.\n',
  album: 'Greatest Hits',
})

test('gets the artist id from the genius api', async () => {
  const results = await mockGetArtistIdDetails('Tupac')

  expect(results).toEqual({
    id: '59',
    songs: [
      {
        song_id: 320,
        full_song_title: "Hit 'Em Up (Ft. Outlawz)",
        song_title: 'Hit ’Em Up',
        song_art_image_thumbnail:
          'https://images.genius.com/a6d7f93a83ec4f3dde28a749c01a6465.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/a6d7f93a83ec4f3dde28a749c01a6465.480x480x1.jpg',
      },
    ],
  })
})

test('gets the artist details from the genius api', async () => {
  const results = await mockGetArtistDetails('59')

  expect(results).toEqual({
    bio:
      'Tupac Amaru Shakur (June 16, 1971 – September 13, 1996), known by his stage names 2Pac and Makaveli, was an actor and a highly influential rapper who is considered by many to be the greatest of all-time due to the revolutionary spirit and thug passion he mixed into his music. During his music career, he made appearances in movies such as his acclaimed debut in Juice (1992), Poetic Justice (1993), and Above the Rim (1994).\n',
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
      'Tupac',
    ],
    social_media: { facebook: 'tupacshakur', instagram: '2pac', twitter: '2pac' },
  })
})

test('gets the song details from the genius api', async () => {
  const results = await mockGetSongDetails('320')

  expect(results).toEqual({
    title: "Hit 'Em Up by 2Pac (Ft. Outlawz)",
    apple_id: '310908421',
    apple_player: 'https://genius.com/songs/320/apple_music_player',
    description:
      'Arguably the most memorable diss track of the East Coast–West Coast rivalry; 2Pac and The Outlawz take aim at The Notorious B.I.G., Diddy, and Mobb Deep, with direct threats of violence.\n',
    album: 'Greatest Hits',
  })
})
