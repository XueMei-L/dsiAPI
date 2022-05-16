import {Document, Schema, model} from 'mongoose';

export interface SongDocumentInterface extends Document {
  title: string,
  artist?: string,
  duration?: number,
  gender?: string[],
  single?: boolean,
  totalViews?: number
}

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

export const Song = model<SongDocumentInterface>('Song', SongSchema);
