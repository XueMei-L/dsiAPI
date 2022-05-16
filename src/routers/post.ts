import express from 'express';
import {Artist} from '../models/artista';

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
