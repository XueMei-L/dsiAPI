import 'mocha';
import {expect} from 'chai';
import {Artist} from '../src/models/artista';
import {Song} from '../src/models/cancion';
import {Playlist} from '../src/models/playlist';
import * as mongoose from 'mongoose';

const artista = new Artist({
  name: 'Bad-Bunny-original',
  gener: ['Trap latino', 'Hip-Hop', 'Rap'],
  songs: ['I like it', 'Yonaguni', 'Diles', 'Booker T'],
  list: 21431212,
});

const cancion1 = new Song({
  title: 'Safaera',
  artist: 'Bad-Bunny-original',
  duration: 3,
  gender: ['Trap-latino'],
  single: false,
  totalViews: 65453,
});

const cancion2 = new Song({
  title: 'Colorin-Colorado',
  artist: 'J-Quiles',
  duration: 2,
  gender: ['Reguetton'],
  single: false,
  totalViews: 345126,
});

const playlist1 = new Playlist({
  title: 'Verano',
  songs: ['Safaera', 'Colorin-Colorado'],
  duration: 34,
  genres: ['Trap-latino'],
});


const axios = require('axios').default;

async function mainMusic(operation: string, url: string) {
  let response;
  switch (operation) {
    case 'post':
      response = await axios.post(url);
      break;
    case 'get':
      response = await axios.get(url);
      break;
    case 'patch':
      const artistaUpdate = {
        name: 'Bad-Bunny',
        genre: ['Trap Latino', 'Reggaeton'],
        songs: ['Un verano sin ti'],
        list: 22354929302,
      };
      response = await axios.patch(url, artistaUpdate);
      break;
    case 'delete':
      response = await axios.delete(url);
      break;
  }
  return response;
}

describe('Test funciones asíncronas Artista', () => {
  it('Agregar a la base de datos un artista', async () => {
    //https://grupo-k-p11-menu-app.herokuapp.com/artista
    //buscar por nombre: https://grupo-k-p11-menu-app.herokuapp.com/artista?name=Bad Bunny - original'
    const data = await mainMusic('post', 'http://localhost:3000/artist');
    expect(data.status).to.equal(201);
  });

  it('Buscar en la base de datos el artista: Bad Bunny-original', async () => {
    const data = await mainMusic('get', 'http://localhost:3000/artista?name=Bad-Bunny-original');
    expect(data.status).to.equal(200);
  });

  it('Modificar el artista: Bad Bunny-original', async () => {
    const data = await mainMusic('patch', 'http://localhost:3000/artista?name=Bad-Bunny-original');
    expect(data.status).to.equal(200);
  });

  it('Eliminar en la base de datos el artista: Bad-Bunny', async () => {
    const data = await mainMusic('delete', 'http://localhost:3000/artista?name=Bad-Bunny');
    expect(data.status).to.equal(200);
  });
});

// eso es el ejemplo:
// it('add', async () => {
//     const response = await mainAliment('post', 'pagina de heroku/parametro');
//     expect(response.status).to.equal(201);
//   });

// sudo snap install --classic heroku
// heroku apps:create --region eu edu-segredo-notes-app
