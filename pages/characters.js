import _ from 'lodash';
import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";
import request from './api/api';

const Characters = ({ characters }) => {
  const { docs, total } = characters;
  const charactersList = docs.slice(0, 20).map((character) => (
    <Link href={`/character/${character._id}`} key={_.uniqueId()}>
          <div className="card">
            {character.name}
          </div>
    </Link>)
  );
  return (<MainLayout>
  <div className="container">
    <div className="content">
      <div className="content-header">Characters: {total}</div>
        <div className="content-body">
          <div className="row">
              <div className="column">
                {charactersList}
              </div>
          </div>
      </div>
    </div>
  </div>
  </MainLayout>)
};

export default Characters;

export async function getStaticProps() {
  const characters = await request('character');
  return {
    props: {
      characters
    },
  };
}