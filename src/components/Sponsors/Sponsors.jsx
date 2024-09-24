import Footer from "../Footer";
import nvedia from "../../assets/sponsor/nvedia.png";
import ouster from "../../assets/sponsor/ouster.png";
import reliance from "../../assets/sponsor/Reliance.png";
import texas from "../../assets/sponsor/texas.png";
import continental from "../../assets/sponsor/continental.png";
import vlid from "../../assets/sponsor/VLid.png";
import RQ from "../../assets/sponsor/RQ.png";
import kudan from "../../assets/sponsor/kudan.png";
import maxm from "../../assets/sponsor/maxm.png";
import Sp from "../../assets/sponsor/Sparton.png";
import Sick from "../../assets/sponsor/sick.png";
import ast from "../../assets/sponsor/ast.png"
import vcn from "../../assets/sponsor/vcn.png"
import asb from "../../assets/sponsor/asbsys.png"
import ea from "../../assets/sponsor/ea.png"
import "./Sponsors.css"; // Import the CSS file
import MyClass from "../Nav";

function Sponsors() {
  return (
    <div>
      <MyClass/>
      <h2 className="p-4 pb-2 border-bottom">Sponsors</h2>
      <div className="sponsors-container">
        {/* Row 1 */}
        <div className="sponsor-row">
          <img src={nvedia} alt="Nvedia" className="sponsor-image" />
          <img src={ouster} alt="Ouster" className="sponsor-image" />
          <img src={reliance} alt="Reliance" className="sponsor-image" />
          <img src={texas} alt="Texas" className="sponsor-image" />
          <img src={continental} alt="Continental" className="sponsor-image" />
        </div>
        {/* Row 2 */}
        <div className="sponsor-row">
        <img src={Sp} alt="Sparton" className="sponsor-image" />
          <img src={RQ} alt="RQ" className="sponsor-image" />
          <img src={kudan} alt="Kudan" className="sponsor-image" />
          <img src={maxm} alt="Max Motor" className="sponsor-image" />
        </div>
        {/* Row 3 */}
        <div className="sponsor-row">
        <img src={Sick} alt="Sick" className="sponsor-image" />
          
          <img src={vlid} alt="Lydar" className="sponsor-image" />
          <img src={ea} alt="ea" className="sponsor-image" />
        </div>
        {/* Row 4 */}
        <div className="sponsor-row">
          <img src={vcn} alt="Vector Nav" className="sponsor-image" />
          <img src={asb} alt="ASB systems" className="sponsor-image" />
        </div>
        {/* Row 5 */}
        <div className="sponsor-row"> 
          <img src={ast} alt="Ast" className="sponsor-image small-image"  />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;
