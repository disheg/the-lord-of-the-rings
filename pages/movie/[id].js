import { MainLayout } from '../../components/MainLayout';
import request from '../api/api';

const Movie = ({ movie }) => {
  const { docs } = movie;
  return <MainLayout>
  <div className="container">
    <div className="content">
      <div className="content-header">{docs[0].name}</div>
        <div className="content-body">
          <div className="row">
              <div className="column">
              <div className="card">
            <ul><li>Budget: {docs[0].budgetInMillions} 000 000$</li>
            <li>The Tomatometer score: {docs[0].rottenTomatesScore}</li>
            <li>Academy Award Nominations: {docs[0].academyAwardNominations}</li></ul>
          </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  </MainLayout>
}

export default Movie;

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const movie = await request('movieById', id);
  return {
    props: {
      movie
    },
  };
}