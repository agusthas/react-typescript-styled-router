import { InfoSection, Footer, ServicesCard } from '../../components';
import { data, data1, data2, data3 } from '../../data/data.mock';

const Home = () => {
  return (
    <>
      <main>
        <InfoSection {...data} />
        <InfoSection {...data1} />
        <InfoSection {...data2} />
        <ServicesCard />
        <InfoSection {...data3} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
