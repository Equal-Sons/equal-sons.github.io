import { NavLink } from 'react-router-dom';

const awardsData = [
  {
    id: 1,
    year: 2017,
    name: "New York Design Week",
    description: "We bring to life the most complex projects, specialize",
    role: "Main developer",
  },
  {
    id: 2,
    year: 2019,
    name: "The Blue Design Awards",
    description: "We bring to life the most complex projects, specialize",
    role: "Animator",
  },
  {
    id: 3,
    year: 2019,
    name: "Best Web Flow",
    description: "We bring to life the most complex projects, specialize",
    role: "Main developer",
  },
  {
    id: 4,
    year: 2019,
    name: "Berlin Interactive Award",
    description: "We bring to life the most complex projects, specialize",
    role: "Best innovations",
  },
]

type IProps = {
  space?:string;
}

const AwardArea = ({space='space-bottom'}:IProps) => {
  return (
    <div className={`award-area-1 ${space} overflow-hidden`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="award-wrap-area">
              {awardsData.map((elm, i) => (
                <li key={i} className="single-award-list">
                  <span className="award-year">{elm.year}</span>
                  <div className="award-details">
                    <h4>
                      <NavLink to="/about">
                        {elm.name}
                      </NavLink>
                    </h4>
                    <p>{elm.description}</p>
                  </div>
                  <span className="award-tag">{elm.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardArea;