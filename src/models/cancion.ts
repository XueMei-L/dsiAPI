import {Document, Schema, model} from 'mongoose';

/**
 * Interfaz de una canción
 */
export interface SongDocumentInterface extends Document {
  title: string,
  artist?: string,
  duration?: number,
  gender?: string[],
  single?: boolean,
  totalViews?: number
}

/**
 * Esquema de una canción de mongoose
 */
const SongSchema = new Schema<SongDocumentInterface>({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: false,
    trim: true,
  },
  duration: {
    type: Number,
    required: false,
    trim: true,
  },
  gender: {
    type: [String],
    required: false,
    trim: true,
  },
  single: {
    type: Boolean,
    required: false,
    trim: true,
    default: true,
  },
  totalViews: {
    type: Number,
    required: false,
    trim: true,
  },
});

/**
 * Modelo de una cancion de mongoose
 */
export const Song = model<SongDocumentInterface>('Song', SongSchema);
