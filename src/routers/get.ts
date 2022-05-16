import express from 'express';
import {Artist} from '../models/artista';

export const getRouter = express.Router();

/**
 * Consulta de un artista mediante query string
 */
getRouter.get('/artist', (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  Artist.find(filter).then((artist) => {
    if (artist.length !== 0) {
      res.send(artist);
    } else {
      res.status(404).send();
    }
  }).catch(() => {
    res.status(500).send();
  });
});

/**
 * Consulta de un artista mediante un parámetro
 */
getRouter.get('/artist/:id', (req, res) => {
  Artist.findById(req.params.id).then((artist) => {
    if (!artist) {
      res.status(404).send();
    } else {
      res.send(artist);
    }
  }).catch(() => {
    res.status(500).send();
  });
});
