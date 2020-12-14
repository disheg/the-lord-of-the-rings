import { MainLayout } from '../../components/MainLayout';
import request from '../api/api';

const Movie = ({ movie }) => {
  const { docs } = movie;
  console.log('1', movie)
  return <MainLayout>
    Name: {docs[0].name}
    Budget: {docs[0].budgetInMillions} 000 000$
    The Tomatometer score: {docs[0].rottenTomatesScore}
    Academy Award Nominations: {docs[0].academyAwardNominations}
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