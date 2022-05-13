import {Document, connect, model, Schema} from 'mongoose';

interface PlaylistDocumentInterface extends Document {
    title: string,
    songs: string[],
    duration: number,
    genres:string[]
}

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

export const Playlist = model<PlaylistDocumentInterface>('Playlist', PlaylistSchema);