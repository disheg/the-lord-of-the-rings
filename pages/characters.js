import _ from 'lodash';
import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";
import request from './api/api';

const Characters = ({ characters }) => {
  const { docs, total } = characters;
  console.log(characters)
  const charactersList = docs.slice(0, 20).map((character) => (<Link href={`/character/${character._id}`} key={_.uniqueId()}>{character.name}</Link>));
  return (<MainLayout>
    <div>
      <h1>Total: {total}</h1>
      {charactersList}
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