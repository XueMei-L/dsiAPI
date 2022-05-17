import {Document, model, Schema} from 'mongoose';

/**
 * Interfaz de una playlist
 */
interface PlaylistDocumentInterface extends Document {
  title: string,
  songs: string[],
  duration: number,
  genres:string[]
}

/**
 * Esquema de una playlist de mongoose
 */
const PlaylistSchema = new Schema<PlaylistDocumentInterface>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  songs: {
    type: [String],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
});

/**
 * Modelo de una playlist de mongoose
 */
export const Playlist = model<PlaylistDocumentInterface>('Playlist', PlaylistSchema);
