import FeatureProduct from "../components/featureProduct/FeatureProduct";
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
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
