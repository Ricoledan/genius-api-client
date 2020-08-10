interface AllSongDetails {
  songId: number
  fullSongTitle: string
  songTitle: string
  songArtImageThumbnail: string
  songArtImageUrl: string
}

interface Search {
  id: string
  songs: any[]
}

interface Artist {
  bio: string
  alias: string
  social_media: {
    facebook: string
    instagram: string
    twitter: string
  }
}

interface Song {
  title: string
  apple_id: string
  apple_player: string
  description: string
  album: string
}

export { AllSongDetails, Search, Artist, Song }
