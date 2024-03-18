import React from 'react';
import Card from './VlogCard/VlogCard';
import './Vlogs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Work = ({
  heading,
  subHeading
}) => {
  return (
    <div className="Vlog-Work-Container">
      <div className="Vlog-Work">
        <div className="Vlog-Work-Head">
        <span className="Vlog-Text">{heading}<span>.</span></span><br />
        <span className="Vlog-Text-description">{subHeading}</span>
      </div>
      <div className="Vlog-Cards">
        <Card src={"./images/Vlogs/parcing.png"} name={"Parcing in programming"} about={""} link={"https://qr.ae/pKfRU6"} vlogImg={"./images/Vlogs/quara.png"}/>
        <Card src={"./images/Vlogs/chandrayaan3.jpg"} name={"Chadrayaan-3"} about={""} link={"https://qr.ae/ps7o2C"} vlogImg={"./images/Vlogs/quara.png"}/>
        <Card src={"./images/Vlogs/Threading.png"} name={"Mutli-Threading"} about={""} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_multithreading-java-concurrency-activity-7175072758316347392-9DXo?utm_source=share&utm_medium=member_desktop"} vlogImg={"./images/Vlogs/linkedin.png"}/>
      </div>
      
      </div>
      <button className="Vlog-cta">
       <span className="Vlog-Text" style={{color: 'inherit'}} ><a href="https://www.quora.com/profile/Abhinav-Srivastav-189" style={{color: 'inherit', textDecoration: 'inherit'}}>View All Vlogs</a></span>
       <svg width="15px" height="10px" viewBox="0 0 13 10">
       <path d="M1,5 L11,5"></path>
       <polyline points="8 1 12 5 8 9"></polyline>
       </svg>
      </button>
    </div>
  );
}

export default Work;
