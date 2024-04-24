import React from 'react';
import './Header.css';



const Header = () => {

  return(
     <div className="Header">
      <div className='title text-center'>
        <h1 className='text-white'>PayUnit Currency Converter</h1>
        <h3 className='text-white'>welcome to the world's most popular money tool.</h3>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
     </div>
  );
};



export default Header;
