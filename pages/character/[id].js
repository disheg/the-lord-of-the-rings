import { MainLayout } from '../../components/MainLayout';
import request from '../api/api';

const Character = ({ character }) => {
  const { docs } = character;
  console.log('1', character)
  return <MainLayout>
    Name: {docs[0].name}
    Race: {docs[0].race}
    Spouce: {docs[0].spouce}
    Wiki: <a href={docs[0].wikiUrl}>{docs[0].wikiUrl}</a>
  </MainLayout>
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const character = await request('characterById', id);
  return {
    props: {
      character
    },
  };
};

export default Character;