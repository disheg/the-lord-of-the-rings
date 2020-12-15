import _ from 'lodash';
import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";
import request from './api/api';

const Movies = ({ moviesProps }) => {
  if (!moviesProps) {
    return <div className='loading'>Loading...</div>;
  }

  const { docs, total } = moviesProps;

  const moviesList = docs.map((movie) => (
    <div className="card" key={_.uniqueId()}>
      <Link href={`/movie/${movie._id}`} key={_.uniqueId()}>
        {movie.name}
      </Link>
    </div>)
  );
  return (<MainLayout>
  <div className="container">
    <div className="content">
      <div className="content-header">Movies: {total}</div>
        <div className="content-body">
          <div className="row">
              <div className="column">
                {moviesList}
              </div>
          </div>
      </div>
    </div>
  </div>
  </MainLayout>)
};

export default Movies;

export async function getStaticProps() {
  const moviesProps = await request('movie');
  return {
    props: {
      moviesProps
    },
  };
}