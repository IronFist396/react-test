import './Statistics.css';
import Counter from './Counter.jsx'
function Statistics() {
  const stats = [
    { icon: 'fas fa-users', end: 30, suffix: '+', label: 'Members' },
    { icon: 'fas fa-code', end: 10, suffix: 'k+', label: 'Lines of Code' },
    { icon: 'fas fa-trophy', end: 20, suffix: '+', label: 'Competitions' },
  ];

  return (
<div className="container my-5 pt-5 pb-3">
  <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
    <div className="col-md-4">
      <div className="card mb-4 rounded-3 pt-4 pb-2 custom-card">
        <div className="card-body">
          <i className='fas fa-users fa-4x icn'></i>
          <Counter className="num-text" targetNumber={30} val={"+"}/>
          <p class="p-text">Members</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-4 rounded-3 pt-4 pb-2 custom-card">
        <div className="card-body">
          <i className='fas fa-code fa-4x icn'></i>
          <h1 className="num-text">
            <Counter className="num-text" targetNumber={20} val={"k+"}/>
          </h1>
          <p class="p-text">Lines of Code</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-4 rounded-3 pt-4 pb-2 custom-card">
        <div className="card-body">
          <i className='fas fa-trophy fa-4x icn'></i>
          <h1 className="num-text">
          <Counter className="num-text" targetNumber={20} val={"+"}/>
          </h1>
          <p class="p-text">Competitions</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Statistics;
