import _ from 'lodash';
import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";
import request from './api/api';

const Movies = ({ movies }) => {
  const { docs, total } = movies;
  console.log(docs)
  const moviesList = docs.map((movie) => (<Link href={`/movie/${movie._id}`} key={_.uniqueId()}>{movie.name}</Link>));
  return (<MainLayout>
    <div>
      <h1>Total: {total}</h1>
      {moviesList}
    </div>
  </MainLayout>)
};

export default Movies;

export async function getStaticProps() {
  const movies = await request('movie');
  return {
    props: {
      movies
    },
  };
}