import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import HomeContent from '../../components/HomeContent/HomeContent';
import Footer from '../../components/Footer/Footer';
import BoxConverter from '../../components/BoxConverter/BoxConverter';


const Home = () => {

  return(
      <div className="Home">
         <Header />
         <HomeContent />
         <Footer />
         <BoxConverter/>
      </div>
  );
};

export default Home;
