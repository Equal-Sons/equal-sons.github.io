import team_data from "../../data/team";
import TeamSingle from "./team-single";


export default function TeamTwo() {
  return (
    <div className="team-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {team_data.map((elm) => (
            <div key={elm.id} className="col-lg-3 col-md-6">
              <TeamSingle elm={elm} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}