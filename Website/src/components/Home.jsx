import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import FAQs from './FAQs';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      {/* <div className="flex flex-col items-center justify-center border-b border-neutral-800"> */}
        <FAQs />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Home;
