import { InfoSection } from '../../components';
import { data, data1, data2 } from '../../data/data.mock';

const Home = () => {
  return (
    <>
      <InfoSection {...data} />
      <InfoSection {...data1} />
      <InfoSection {...data2} />
    </>
  );
};

export default Home;
