import CountUp from 'react-countup';
import './Statistics.css';

function Statistics() {
  const stats = [
    { icon: 'fas fa-users', end: 30, suffix: '+', label: 'Members' },
    { icon: 'fas fa-code', end: 10, suffix: 'k+', label: 'Lines of Code' },
    { icon: 'fas fa-trophy', end: 20, suffix: '+', label: 'Competitions' },
  ];

  return (
    <div className="d-flex align-items-center justify-content-center outer-div">
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-4 col-12 mb-5">
              <i className={`${stat.icon} fa-4x icn`}></i>
              <p className="text-white mt-3 subtxt">
                <span className="numtxt">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={1.75}
                    suffix={stat.suffix}
                    scrollSpyOnce
                  />
                </span>
                <br />{stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
