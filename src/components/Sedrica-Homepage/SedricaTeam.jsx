// import MyCard from "../Alumni/CardTwist";

// import oc from '../../assets/people/oc.jpg'
// import lead1 from '../../assets/people/lead1_new.jpg'
// import lead2 from '../../assets/people/lead2_new.jpg'
// import hoo from '../../assets/people/hoo_new.jpg'

// import sub1 from '../../assets/people/percep_subsys_head.jpg'
// import sub2 from '../../assets/people/percep_subsys_head_2_new.png'
// import sub3 from '../../assets/people/mecha_subsys_head.jpg'
// import sub4 from '../../assets/people/control_subsy_head_new.JPG'
// import sub5 from '../../assets/people/motion_planning_subsys_head_new.jpg'
// import sub6 from '../../assets/people/motion_planning_subsys_head2.jpg'

// import sph1 from '../../assets/people/sophie_1_new.jpg'
// import sph2 from '../../assets/people/sophie_2_new.jpg'
// import sph3 from '../../assets/people/sophie_3.jpg'
// import sph4 from '../../assets/people/sophie_4_new.jpg'
// import sph5 from '../../assets/people/sophie_5_new.jpg'
// import sph6 from '../../assets/people/sophie_6.jpg'

// import './SedricaTeam.css'

// function SedricaCard(){
    
//     const managers = ['Person1', 'Person2', 'Person3', 'Person4']
    
    
//     return(<>
//         <style
//         dangerouslySetInnerHTML={{
//           __html: `
//             .position{
//                 // font-family: 'Ubuntu';
//                 font-weight: 600;
//                 text-align: center;
//                 margin-top: 10px;
//             }
//             .fw-normal{
//                 // font-family: 'Ubuntu';
//                 font-weight: 500;
//                 font-size: 1.6rem;
//             }

//             .two-container{
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: center;
//             }
//             .center-container{
//                 padding-top: 15px;
//                 padding-bottom: 15px;
//                 display:flex;
//                 flex-direction: column;
//                 align-items: center;
//                 justify-content: center;
                
//                 .pgraph{
//                     font-family: 'Roboto';
//                     width: 100%;
//                     max-width: 300px; /* Adjust width for smaller screens */
//                     text-align:center;
//                 }

//             }
//             .container {
//               display: flex;
//               justify-content: space-between;
//               gap: 2rem;
//               max-width: 80rem;
//               margin: 0 auto;
//               padding: 3.2rem;
//               padding-top: 15px;
//               padding-bottom: 15px;
//             }
//             .card-content {
//               display: flex;
//               flex-direction: column;
//               align-items: center;
//               text-align: center;
//               width: 100%;
//               max-width: 300px; /* Adjust width for smaller screens */
//               margin: 1rem;
//             }
//             @media screen and (max-width: 768px) {
//               .container {
//                 flex-direction: column;
//                 align-items: center;
//               }
//             }
//           `
//         }}
//       />
//         {/* OCs */}
        
//         <div className="center-container">
//             <h1 style={{marginTop: '20px'}} className="position">OC</h1>
//             <MyCard img={oc}/>
//             <h2 className="fw-normal">Atharva Kulkarni</h2>
//             <p className="pgraph">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//         </div>
//         {/* Team Leads */}
//         <h1 className="position">Team Leads</h1>
//         <div className="two-container">
//             <div className="card-content">
//                 <MyCard img={lead1}/>
//                 <h2 className="fw-normal">Aman Badave</h2>
//                 <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={lead2}/>
//                 <h2 className="fw-normal">Aryan Mishra</h2>
//                 <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//             </div>
            
//         </div>
//         {/* Head of operations */}
//         <div className="center-container">
//             <h1 className="position">Head of Operations</h1>
//             <MyCard img={hoo}/>
//             <h2 className="fw-normal">Areeb Asgar</h2>
//             <p className="pgraph">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//         </div>


//         {/* Subsystem Heads */}
//         <h1 className="position">Subsystem Heads</h1>
//         <div className="two-container">
//             <div className="card-content">
//                 <MyCard img={sub1}/>
//                 <h2 className="fw-normal">Ayush Kumar</h2>
//                 <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sub2}/>
//                 <h2 className="fw-normal">Yajan Agarwal</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sub3}/>
//                 <h2 className="fw-normal">Virti Mehta</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//         </div>
//         <div className="two-container">
//             <div className="card-content">
//                 <MyCard img={sub4}/>
//                 <h2 className="fw-normal">Yash Gupta</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sub5}/>
//                 <h2 className="fw-normal">Kshitij Vaidya</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sub6}/>
//                 <h2 className="fw-normal">Vishal Gautam</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//         </div>

//         {/* Sophies */}
//         <h1 className="position">Sophies</h1>
//         <div className="two-container">
//             <div className="card-content">
//                 <MyCard img={sph1}/>
//                 <h2 className="fw-normal">Sahil Kukreja</h2>
//                 <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sph2}/>
//                 <h2 className="fw-normal">K.ri Charan Raj</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sph3}/>
//                 <h2 className="fw-normal">Shivam Singh Yadav</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//         </div>
//         <div className="two-container">
//             <div className="card-content">
//                 <MyCard img={sph4}/>
//                 <h2 className="fw-normal">Yuvraj Parekh</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sph5}/>
//                 <h2 className="fw-normal">Paawan</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//             <div className="card-content">
//                 <MyCard img={sph6}/>
//                 <h2 className="fw-normal">Johan Sam Biju</h2>
//                 <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
//             </div>
//         </div>
//     </>
//     );
// };

// export default SedricaCard






























import MyCard from "./CardTwist";

import oc from '../../assets/people/oc.jpg';
import lead1 from '../../assets/people/lead1_new.jpg';
import lead2 from '../../assets/people/lead2_new.jpg';
import hoo from '../../assets/people/hoo_new.jpg';

import m1 from '../../assets/people/manager_1.png'
import m2 from '../../assets/people/manager_2_new.jpg'
import m3 from '../../assets/people/manager_3_new.jpg'

import sub1 from '../../assets/people/percep_subsys_head.jpg';
import sub2 from '../../assets/people/percep_subsys_head_2_new.png';
import sub3 from '../../assets/people/mecha_subsys_head.jpg';
import sub4 from '../../assets/people/control_subsy_head_new.JPG';
import sub5 from '../../assets/people/motion_planning_subsys_head_new.jpg';
import sub6 from '../../assets/people/motion_planning_subsys_head2.jpg';

import sph1 from '../../assets/people/sophie_1_new.jpg';
import sph2 from '../../assets/people/sophie_2_new.jpg';
import sph3 from '../../assets/people/sophie_3_new.jpg';
import sph4 from '../../assets/people/sophie_4_new.jpg';
import sph5 from '../../assets/people/sophie_5_new.jpg';
import sph6 from '../../assets/people/sophie_6.jpg';


import b1 from '../../assets/people/b_1.jpg';
import b2 from '../../assets/people/b_2_new.jpg';
import b3 from '../../assets/people/b_3_new.jpg';
import b4 from '../../assets/people/b_4_new.jpg';
import b5 from '../../assets/people/b_5.jpg';
import b6 from '../../assets/people/b_6_new.jpg';
import b7 from '../../assets/people/b_7.jpg'



import './SedricaTeam.css';

function SedricaCard() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .card-wrapper{
              padding:10px;
              padding-bottom: 5px;
              text-align:center;
              width:210px;
              height: auto;
              background-color: #7ebeff;
              display:flex;
              align-items: center;
              justify-content: start;
              flex-direction: column;
              border-radius: 5%;
              .card-p{
                margin: 0;
              }
            }
            .position {
                font-weight: 600;
                text-align: center;
                margin-top: 10px;
            }
            .fw-normal {
                font-weight: 500;
                font-size: 1.6rem;
            }
            .two-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 2rem; /* Horizontal gap between cards */
                // margin-bottom: 0.1rem; /* Vertical spacing between rows */
            }
            .center-container {
                padding-top: 20px;
                padding-bottom: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem; /* Vertical spacing between sections */
            }
            .pgraph {
                font-family: 'Roboto';
                width: 100%;
                max-width: 300px;
                text-align: center;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 100%;
                max-width: 300px;
                margin: 1rem;
            }
            h1.position {
                margin-top: 20px;
                margin-bottom: 1rem;
            }
            @media screen and (max-width: 768px) {
                .container {
                    flex-direction: column;
                    align-items: center;
                }
            }
            
          `,
        }}
      />
      {/* OCs */}
      <div className="center-container">
        <h1 className="position">Overall Coordinator</h1>
        
          <MyCard img={oc} lnk={'https://www.linkedin.com/in/atharva-kulkarni-9b962422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} />
          <h2 className="fw-normal">Atharva Kulkarni</h2>
        
      </div>

      {/* Team Leads */}
      <h1 className="position">Team Leads</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
        
          <MyCard lnk={'https://www.linkedin.com/in/aman-badave-b87001250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={lead1} />
          <h2 className="fw-normal">Aman Badave</h2>
        
        </div>
        <div className="card-content col-lg-4">
        
          <MyCard lnk={'https://www.linkedin.com/in/aryan-mishra-839272226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={lead2} />
          <h2 className="fw-normal">Aryan Mishra</h2>
        
        </div>
      </div>

      {/* Head of Operations */}
      <div className="center-container">
        <h1 className="position">Head of Operations</h1>
        <MyCard lnk={'https://www.linkedin.com/in/areeb-asgar-9517b9237'} img={hoo} />
        <h2 className="fw-normal">Areeb Asgar</h2>
      </div>

  {/* Managers */}
  <h1 className="position">Managers</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
       
          <MyCard lnk={'https://www.linkedin.com/in/kshaunish-chandalia/'} img={m1} />
          <h2 className="fw-normal">Kshaunish Chandalia</h2>
          </div>
       
        <div className="card-content col-lg-4">

       
          <MyCard lnk={'https://www.linkedin.com/in/parth-agrawal-6a687a232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={m2} />
          <h2 className="fw-normal">Parth Agrawal</h2>
       
        </div>
        <div className="card-content col-lg-4">
       
            <MyCard lnk={'https://www.linkedin.com/in/manav-jain-b593b6251/'} img={m3} />
            <h2 className="fw-normal">Manav Sanjay Jain</h2>  
       
        </div>
      </div>



      {/* Subsystem Heads */}
      <h1 className="position">Subsystem Heads</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/ayush-kumar-04746426a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sub1} />
          <h2 className="fw-normal">Ayush Kumar</h2>
          <p className="card-p">Perception Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/yajan-agarwal/'} img={sub2} />
          <h2 className="fw-normal">Yajan Agarwal</h2>
          <p className="card-p">Perception Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/virti-mehta-b35ab2204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sub3} />
          <h2 className="fw-normal">Virti Mehta</h2>
          <p className="card-p">Mechatronics Subsystem Head</p>
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/yashgupta1397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={sub4} />
          <h2 className="fw-normal">Yash Gupta</h2>
          <p className="card-p">Controls Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/kshitij-vaidya-9b770820a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={sub5} />
          <h2 className="fw-normal">Kshitij Vaidya</h2>
          <p className="card-p">Motion Planning Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/vishal-gautam-b442b9276/'} img={sub6} />
          <h2 className="fw-normal">Vishal Gautam</h2>
          <p className="card-p">Motion Planning Subsystem Head</p>
        </div>
      </div>

      {/* Sophies */}
      <h1 className="position">Junior Engineers</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/sahil-kukreja-a3b73a27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sph1} />
          <h2 className="fw-normal">Sahil Kukreja</h2>
          <p className="card-p">Perception</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/sri-charan-raj-kanakala-006158287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sph2} />
          <h2 className="fw-normal">K.Sri Charan Raj</h2>
          <p className="card-p">Mechatronics</p>
        </div>
        <div className="card-content col-lg-4">
          
            <MyCard lnk={'https://www.linkedin.com/in/shivam-singh-yadav-202133287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sph3} />
            <h2 className="fw-normal">Shivam Singh Yadav</h2>
            <p className="card-p">Motion Planning</p>
          
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/yuvraj-parekh-441179287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sph4} />
          <h2 className="fw-normal">Yuvraj Parekh</h2>
          <p className="card-p">Perception</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/paawan-nenwani-1b989328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={sph5} />
          <h2 className="fw-normal">Paawan</h2>
          <p className="card-p">Perception</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://in.linkedin.com/in/johan-biju-b04564327'} img={sph6} />
          <h2 className="fw-normal">Johan Sam Biju</h2>
          <p className="card-p">Motion Planning</p>
        </div>
      </div>


        {/* BTeam */}
      <h1 className="position">Business Team</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://in.linkedin.com/in/renudhruva-s-5b5032269'} img={b1} />
          <h2 className="fw-normal">Renudhruva</h2>
          <p className="card-p">Media and PR</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/prajwal-talwalkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b2} />
          <h2 className="fw-normal">Prajwal Talwalkar</h2>
          <p className="card-p">Media and PR</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/mishkat-fatma-266174291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b3} />
          <h2 className="fw-normal">Mishkat Fatma</h2>
          <p className="card-p">Marketing</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/dikshit-singla-b1538427a/'} img={b7} />
          <h2 className="fw-normal">Dikshit Singla</h2>
          <p className="card-p">Creatives</p>
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/khushi-chandak-5b1038297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b4} />
          <h2 className="fw-normal">Khushi Chandak</h2>
          <p className="card-p">Creatives</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/pratyaksh-bhardwaj-b2309ar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b5} />
          <h2 className="fw-normal">Pratyaksh Bhardwaj</h2>
          <p className="card-p">Web Developer</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/atharv-roday-a4b0a9293/'} img={b6} />
          <h2 className="fw-normal">Atharv Roday</h2>
          <p className="card-p">Web Developer</p>
        </div>
      </div>


    </>
  );
}

export default SedricaCard;

