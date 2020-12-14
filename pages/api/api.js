import axios from 'axios';

const link = 'https://the-one-api.dev/v2/';
const token = 'jywqCDcS0z4VwTZHqQfZ';
const path = {
  movie: () => 'movie',
  movieById: (id) => 'movie/' + id,
  book: () => 'book',
  bookById: (id) => 'book/' + id,
  character: () => 'character',
  characterById: (id) => 'character/' + id,
};

export default async function request(slag, id = null) {
  const options = {
    method: 'GET',
    url: link + path[slag](id),
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }
  const res = await axios.request(options);
  return res.data;
}