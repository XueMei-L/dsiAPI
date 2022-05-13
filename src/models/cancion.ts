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
        unique: false,
        required: false,
        trim: true,
    },
    duration: {
        type: Number,
        unique: true,
        required: false,
        trim: true,
    },
    gender: {
        type: [String],
        unique: true,
        required: false,
        trim: true,
    },
    single: {
        type: Boolean,
        unique: true,
        required: false,
        trim: true,
    },
    totalViews: {
        type: Number,
        unique: true,
        required: false,
        trim: true,
    },
});

export const Song = model<SongDocumentInterface>('Song', SongSchema);