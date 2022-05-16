import express from 'express';
import {Artist} from '../models/artista';
import {Song} from '../models/cancion';
import {Playlist} from '../models/playlist';

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

/**
 * Eliminar una cancion mediante query string
 */
deleteRouter.delete('/song', (req, res) => {
  if (!req.query.title) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    Song.findOneAndDelete({title: req.query.title.toString()}).then((song) => {
      if (!song) {
        res.status(404).send();
      } else {
        res.send(song);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});

/**
 * Eliminar una cancion mediante un parámetro
 */
deleteRouter.delete('/song/:id', (req, res) => {
  Song.findByIdAndDelete(req.params.id).then((song) => {
    if (!song) {
      res.status(404).send();
    } else {
      res.send(song);
    }
  }).catch(() => {
    res.status(400).send();
  });
});

/**
 * Eliminar una playlist mediante query string
 */
deleteRouter.delete('/playlist', (req, res) => {
  if (!req.query.title) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    Playlist.findOneAndDelete({title: req.query.title.toString()}).then((playlist) => {
      if (!playlist) {
        res.status(404).send();
      } else {
        res.send(playlist);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});

/**
 * Eliminar una playlist mediante un parámetro
 */
deleteRouter.delete('/playlist/:id', (req, res) => {
  Playlist.findByIdAndDelete(req.params.id).then((playlist) => {
    if (!playlist) {
      res.status(404).send();
    } else {
      res.send(playlist);
    }
  }).catch(() => {
    res.status(400).send();
  });
});
