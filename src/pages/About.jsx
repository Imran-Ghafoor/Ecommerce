import HeroSection from "../components/UI/HeroSection";

const About = () => {
  const data = {
    name: "Imran Ecommerce Store",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
