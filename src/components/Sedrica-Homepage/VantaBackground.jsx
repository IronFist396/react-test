import React, { useEffect, useRef } from "react";
import './VantaBackground.css'

const VantaBackground = () => {
  const vantaRef = useRef(null); // Create a ref for the div element

  useEffect(() => {
    const vantaEffect = window.VANTA.NET({
        el: vantaRef.current, // Attach Vanta to the ref element
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x929292,
        backgroundColor: 0xd0d13,
        points: 12.00,
        spacing: 16.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup the effect on unmount
    };
  }, []);

  return (
    <div ref={vantaRef} className="outer-div" style={{ }}>
      {/* Add any content you want inside the Vanta effect */}
      <div className="container">
        <div className="col-lg-8">
          <h1 className="title-hmpg">We are<br/> INNOVATORS!</h1>
        </div>
      </div>      
    </div>
  );
};

export default VantaBackground;
