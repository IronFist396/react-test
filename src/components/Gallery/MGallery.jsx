// import Footer from "../Footer";
// import MyClass from "../Nav";

// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// import { useState, useEffect } from "react"
// import './MGallery.css'

// import img1 from '../../assets/images/IMG_2387.jpg'
// import img2 from '../../assets/images/IMG_2390.jpg'
// import img3 from '../../assets/images/IMG_2395.jpg'
// import img4 from '../../assets/images/IMG_2399.jpg'
// import img5 from '../../assets/images/IMG_2400.jpg'
// import img6 from '../../assets/images/IMG_2405.jpg'
// import img7 from '../../assets/images/IMG_2414.jpg'
// import img8 from '../../assets/images/IMG_2418.jpg'
// import img9 from '../../assets/images/IMG_2419.jpg'
// import img10 from '../../assets/images/IMG_2420.jpg'

// import prev from '../../assets/images/prev_img.svg'
// import next from '../../assets/images/next_img.svg'
// import close from '../../assets/images/close.svg'


// const images = [
//   img1, img2, img3, img4, img5, img6, img7, img10, img8, img9, img6, img5, 
// ]

// function MGallery(){

//   const [data, setData] = useState({img: '', i: 0})

//   function viewImage(img, i){
//       setData({img, i})
//   }

//   function imgAction(action){
//       let i = data.i;
//       if (action === 'next-image'){
//           setData({img: images[i + 1], i: i+1});
//       }
//       else if (action === 'prev-image'){
//           setData({img: images[i - 1], i: i-1});
//       }
//       if(!action){
//           setData({img: '', i: 0})
//       }

//   }
//   useEffect(() => {
//     if (data.img) {
//         document.body.style.overflow = 'hidden'; // Disable scroll
//     } else {
//         document.body.style.overflow = 'auto'; // Re-enable scroll
//     }

//     // Cleanup on unmount
//     return () => {
//         document.body.style.overflow = 'auto';
//     };
//     }, [data.img]);

    


//   return(
//       <>
//         <MyClass/>
//         <br/>
//         <h1>Gallery</h1>
//         {/* Gallery Component */}
//         {
//           data.img &&
//           <div style={{width: '100%', height: '100vh', background: 'rgba(0, 0, 0, 0.8)', top:0, zIndex:2,
//               display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'hidden', position: 'fixed',
//           }}>      
              
//               <button className="img-change-btn-left" onClick={() => imgAction('prev-image')}>
//               <img src={prev} alt="Previous" className="img-btn" />
//               </button>
//               <button className="close-btn" onClick={() => imgAction()}>
//               <img src={close} alt="Previous" className="img-btn" />
//               </button>
//               <img src={data.img} style={{width: 'auto', maxWidth: '92%', maxHeight: '92%'}}></img>
//               <button className="img-change-btn-right" onClick={() => imgAction('next-image')}>
//               <img src={next} alt="Previous" className="img-btn" />
//               </button>
//           </div>
          
//       }
      
//       <div style={{padding: '10px'}}>
//           <ResponsiveMasonry
//                   columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
//               <Masonry gutter="20px">
//                   {images.map((image, i) => (
//                       <img
//                           key={i}
//                           src={image}
//                           style={{width: "100%", display: "block", cursor: "pointer"}}
//                           alt=""
//                           onClick={() => viewImage(image,i)}
//                       />
//                   ))}
//               </Masonry>
//           </ResponsiveMasonry>
//       </div>
        
        
        
//         <Footer/>

//       </>
// )
// }

// export default MGallery;






















































import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../Footer";
import MyClass from "../Nav";
import './MGallery.css';

// Image imports

import img1 from '../../assets/images/compressed/IMG_2387.jpg';
import img2 from '../../assets/images/compressed/IMG_2390.jpg';
import img3 from '../../assets/images/compressed/IMG_2395.jpg';
import img4 from '../../assets/images/compressed/IMG_2399.jpg';
import img5 from '../../assets/images/compressed/IMG_2400.jpg';
import img6 from '../../assets/images/compressed/IMG_2405.jpg';
import img7 from '../../assets/images/compressed/IMG_2414.jpg';
import img8 from '../../assets/images/compressed/IMG_2418.jpg';
import img9 from '../../assets/images/compressed/IMG_2419.jpg';
import img10 from '../../assets/images/compressed/IMG_2420.jpg';

// Icon imports
import prev from '../../assets/images/prev_img.svg';
import next from '../../assets/images/next_img.svg';
import close from '../../assets/images/close.svg';

const images = [img1, img2, img3, img4, img5, img6, img7, img10, img8, img9, img6, img5];

function MGallery() {
  const [data, setData] = useState({ img: '', i: 0 });
  const [loading, setLoading] = useState(true); // New state to track loading
  const [loadedCount, setLoadedCount] = useState(0); // Track how many images have loaded

  const totalImages = images.length;

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-image') {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action === 'prev-image') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  };

  useEffect(() => {
    if (data.img) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scroll
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [data.img]);

  // Handle when each image is loaded
  const handleImageLoad = () => {
    setLoadedCount(prevCount => prevCount + 1); // Increment count when an image is loaded
  };

  useEffect(() => {
    if (loadedCount === totalImages) {
      setLoading(false); // All images are loaded, remove the loading screen
    }
  }, [loadedCount, totalImages]);

  return (
    <>
      <MyClass />
      <br />
      <h1>Gallery</h1>

      {/* Full-screen image view */}
      {data.img && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            top: 0,
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'hidden',
            position: 'fixed',
          }}
        >
          <button className="img-change-btn-left" onClick={() => imgAction('prev-image')}>
            <img src={prev} alt="Previous" className="img-btn" />
          </button>
          <button className="close-btn" onClick={() => imgAction()}>
            <img src={close} alt="Close" className="img-btn" />
          </button>
          <img src={data.img} style={{ width: 'auto', maxWidth: '92%', maxHeight: '92%' }} alt="Gallery" />
          <button className="img-change-btn-right" onClick={() => imgAction('next-image')}>
            <img src={next} alt="Next" className="img-btn" />
          </button>
        </div>
      )}

      {/* Loading Screen */}
      {loading && <div className="loading-text">Loading...</div>}

      {/* Image Gallery */}
      <div style={{ padding: '10px' }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                alt=""
                onClick={() => viewImage(image, i)}
                onLoad={handleImageLoad} // Trigger handleImageLoad on each image load
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <Footer />
    </>
  );
}

export default MGallery;
