import express from 'express';
import {Artist} from '../models/artista';
import {Song} from '../models/cancion';
import {Playlist} from '../models/playlist';


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


/**
 * Consulta de una cancion mediante query string
 */
getRouter.get('/song', (req, res) => {
  const filter = req.query.title?{title: req.query.title.toString()}:{};

  Song.find(filter).then((song) => {
    if (song.length !== 0) {
      res.send(song);
    } else {
      res.status(404).send();
    }
  }).catch(() => {
    res.status(500).send();
  });
});

/**
 * Consulta de una cancion mediante un parámetro
 */
getRouter.get('/song/:id', (req, res) => {
  Song.findById(req.params.id).then((song) => {
    if (!song) {
      res.status(404).send();
    } else {
      res.send(song);
    }
  }).catch(() => {
    res.status(500).send();
  });
});

/**
 * Consulta de una playlist mediante query string
 */
getRouter.get('/playlist', (req, res) => {
  const filter = req.query.title?{title: req.query.title.toString()}:{};

  Playlist.find(filter).then((playlist) => {
    if (playlist.length !== 0) {
      res.send(playlist);
    } else {
      res.status(404).send();
    }
  }).catch(() => {
    res.status(500).send();
  });
});

/**
 * Consulta de una playlist mediante un parámetro
 */
getRouter.get('/playlist/:id', (req, res) => {
  Playlist.findById(req.params.id).then((playlist) => {
    if (!playlist) {
      res.status(404).send();
    } else {
      res.send(playlist);
    }
  }).catch(() => {
    res.status(500).send();
  });
});
