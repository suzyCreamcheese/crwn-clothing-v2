import Directory from '../../components/directory/directory.component';
import categories from '../../categories.json';

import './home.styles.scss';

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
