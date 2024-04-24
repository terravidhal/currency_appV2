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

   /*  <div className="Header" style={{
      backgroundImage: 'url("../src/assets/Banner.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '50vh',
     // position: 'fixed',
      overflowY: 'auto',
    }}>
      <div className='title text-center'>
        <h1 className='text-white'>PayUnit Currency Converter</h1>
        <h3 className='text-white'>welcome to the world's most popular money tool.</h3>
      </div>
     </div> */
  );
};



export default Header;
