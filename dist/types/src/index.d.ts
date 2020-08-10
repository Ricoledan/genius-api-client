import { Search } from './types';
declare const getArtistIdDetails: (name: string) => Promise<void | Search>;
declare const getArtistDetails: (id: string) => void;
declare const getSongDetails: (id: string) => void;
export { getArtistIdDetails, getArtistDetails, getSongDetails };
