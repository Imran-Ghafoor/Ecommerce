import HeroSection from "../components/UI/HeroSection";
import Services from "../components/UI/Services";
import Trusted from "../components/UI/Trusted";

const Home = () => {
  const data = {
    name: "Imran Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
