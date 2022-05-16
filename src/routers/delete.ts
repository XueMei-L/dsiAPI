import express from 'express';
import {Artist} from '../models/artista';

export const deleteRouter = express.Router();

/**
 * Eliminar un artista mediante query string
 */
deleteRouter.delete('/artist', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  } else {
    Artist.findOneAndDelete({name: req.query.name.toString()}).then((artist) => {
      if (!artist) {
        res.status(404).send();
      } else {
        res.send(artist);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});

/**
 * Eliminar un artista mediante un parámetro
 */
deleteRouter.delete('/artist/:id', (req, res) => {
  Artist.findByIdAndDelete(req.params.id).then((artist) => {
    if (!artist) {
      res.status(404).send();
    } else {
      res.send(artist);
    }
  }).catch(() => {
    res.status(400).send();
  });
});
