import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img style={{width: '20%', height: 'auto'}} src={require('../../assets/loader.gif')} alt="Loading..." className="preloader-gif" />
    </div>
  );
};

export default Preloader;
