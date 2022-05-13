import {Document, Schema, model} from 'mongoose';

interface ArtistDocumentInterface extends Document {
  name: string,
  genre: string[],
  songs: string[],
  listeners: number
}

const ArtistSchema = new Schema<ArtistDocumentInterface>({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('The name of the artist must start with a capital letter');
      }
    },
  },
  genre: {
    type: [String],
    required: true,
    trim: true
  },
  songs: {
    type: [String],
    required: true,
    trim: true,
  },  
  listeners: {
    type: Number,
    required: true,
    trim: true,
  }
});

export const Artist = model<ArtistDocumentInterface>('Artist', ArtistSchema);
