import express from 'express';
import {Artist} from '../models/artista';
import {Song} from '../models/cancion';


export const postRouter = express.Router();

/**
 * Creacion de un artista
 */
postRouter.post('/artist', (req, res) => {
  const artist = new Artist(req.body);

  artist.save().then((artist) => {
    res.status(201).send(artist);
  }).catch((error) => {
    res.status(400).send(error);
  });
});

/**
 * Creacion de una cancion
 */
postRouter.post('/song', (req, res) => {
  const song = new Song(req.body);

  song.save().then((song) => {
    res.status(201).send(song);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
