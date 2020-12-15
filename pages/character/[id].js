import { MainLayout } from '../../components/MainLayout';
import request from '../api/api';

const Character = ({ character }) => {
  const { docs } = character;
  return <MainLayout>
  <div className="container">
    <div className="content">
      <div className="content-header">{docs[0].name}</div>
        <div className="content-body">
          <div className="row">
              <div className="column">
              <div className="card">
            <ul><li>Race: {docs[0].race}</li>
            <li>Spouce: {docs[0].spouce}</li>
            <li>Wiki: <a href={docs[0].wikiUrl}>{docs[0].wikiUrl}</a></li></ul>
          </div>
              </div>
          </div>
      </div>
    </div>
  </div>
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