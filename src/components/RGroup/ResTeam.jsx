

import MyCard from "./CardTwist";

import oc from '../../assets/people/oc.jpg';
import lead1 from '../../assets/people/lead1_new.jpg';
import lead2 from '../../assets/people/lead2_new.jpg';
import hoo from '../../assets/people/hoo_new.jpg';

import sub1 from '../../assets/people/percep_subsys_head.jpg';
import sub2 from '../../assets/people/percep_subsys_head_2_new.png';
import sub3 from '../../assets/people/mecha_subsys_head.jpg';
import sub4 from '../../assets/people/control_subsy_head_new.JPG';
import sub5 from '../../assets/people/motion_planning_subsys_head_new.jpg';
import sub6 from '../../assets/people/motion_planning_subsys_head2.jpg';


import b1 from '../../assets/people/b_1.jpg';
import b2 from '../../assets/people/b_2_new.jpg';
import b3 from '../../assets/people/b_3_new.jpg';
import b4 from '../../assets/people/b_4_new.jpg';
import b5 from '../../assets/people/b_5.jpg';
import b6 from '../../assets/people/b_6_new.jpg';



import './ResCard.css';

function ResCard() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 2rem; /* Horizontal gap between cards */
                margin-bottom: 0.1rem; /* Vertical spacing between rows */
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

 

      {/* Subsystem Heads */}
      <h1 className="position">Subsystem Heads</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/ayush-kumar-04746426a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sub1} />
          <h2 className="fw-normal">Ayush Kumar</h2>
          <p>Perception Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/yajan-agarwal/'} img={sub2} />
          <h2 className="fw-normal">Yajan Agarwal</h2>
          <p>Perception Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/virti-mehta-b35ab2204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={sub3} />
          <h2 className="fw-normal">Virti Mehta</h2>
          <p>Mechatronics Subsystem Head</p>
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/yashgupta1397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={sub4} />
          <h2 className="fw-normal">Yash Gupta</h2>
          <p>Controls Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/kshitij-vaidya-9b770820a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} img={sub5} />
          <h2 className="fw-normal">Kshitij Vaidya</h2>
          <p>Motion Planning Subsystem Head</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/vishal-gautam-b442b9276/'} img={sub6} />
          <h2 className="fw-normal">Vishal Gautam</h2>
          <p>Motion Planning Subsystem Head</p>
        </div>
      </div>

        {/* BTeam */}
      <h1 className="position">Business Team</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://in.linkedin.com/in/renudhruva-s-5b5032269'} img={b1} />
          <h2 className="fw-normal">Renudhruva</h2>
          <p>Media and PR</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/prajwal-talwalkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b2} />
          <h2 className="fw-normal">Prajwal Talwalkar</h2>
          <p>Media and PR</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/mishkat-fatma-266174291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b3} />
          <h2 className="fw-normal">Mishkat Fatma</h2>
          <p>Marketing</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/dikshit-singla-b1538427a/'} img={b4} />
          <h2 className="fw-normal">Dikshit Singla</h2>
          <p>Creatives</p>
        </div>
      </div>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/khushi-chandak-5b1038297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b4} />
          <h2 className="fw-normal">Khushi Chandak</h2>
          <p>Creatives</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/pratyaksh-bhardwaj-b2309ar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} img={b5} />
          <h2 className="fw-normal">Pratyaksh Bhardwaj</h2>
          <p>Web Developer</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/atharv-roday-a4b0a9293/'} img={b6} />
          <h2 className="fw-normal">Atharv Roday</h2>
          <p>Web Developer</p>
        </div>
      </div>


    </>
  );
}

export default ResCard;

