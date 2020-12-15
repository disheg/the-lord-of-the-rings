import { mount } from 'enzyme';
import Movies from '../movies';

let initialProps;

beforeAll(() => {
  const moviesProps = {
    docs: [
      {
        _id: 123,
        name: 'John Wock'
      },
      {
        _id: 124,
        name: 'John Wuck'
      },
      {
        _id: 125,
        name: 'John Wick'
      }
    ],
    total: 3
  };
  initialProps = { moviesProps, }
})
describe('Title Component', () => {
  it('should render without props', () => {
    const wrapper = mount(<Movies />);

    expect(wrapper.find('div.loading')).toHaveLength(1);
  })
  it('should render without crashing', () => {
    const wrapper = mount(<Movies { ...initialProps } />);

    expect(wrapper.find('div.content-header')).toHaveLength(1);
  });
  it('should render props', () => {
    const wrapper = mount(<Movies { ...initialProps } />);

    expect(wrapper.find('div.card')).toHaveLength(3);
  })
});