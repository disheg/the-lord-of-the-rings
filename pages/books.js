import _ from 'lodash';
import {MainLayout} from "../components/MainLayout";
import request from './api/api';

const Books = ({ books }) => {
  const { docs, total } = books;
  const booksList = docs.map((book) => (<li key={_.uniqueId()}>{book.name}</li>));
  return (<MainLayout>
    <div>
      <h1>Total: {total}</h1>
      {booksList}
    </div>
  </MainLayout>)
};

export default Books;

export async function getStaticProps() {
  const books = await request('book');
  return {
    props: {
      books
    },
  };
}