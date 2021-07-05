import { InfoSection, Footer } from '../../components';
import { data, data1, data2 } from '../../data/data.mock';

const Home = () => {
  return (
    <>
      <main>
        <InfoSection {...data} />
        <InfoSection {...data1} />
        <InfoSection {...data2} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
