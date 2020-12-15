import _ from 'lodash';
import {MainLayout} from "../components/MainLayout";
import request from './api/api';

const Books = ({ books }) => {
  const { docs, total } = books;
  const booksList = docs.map((book) => (<div className="card">
  {book.name}
</div>));
  return (<MainLayout>
    <div className="container">
    <div className="content">
      <div className="content-header">Books: {total}</div>
        <div className="content-body">
          <div className="row">
              <div className="column">
                {booksList}
              </div>
          </div>
      </div>
    </div>
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