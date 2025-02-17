import type { ITeamDT } from "../../types/team-d-t";
export default function TeamSingle({ elm }: { elm: ITeamDT }) {
	return (
		<div className="team-card">
			<div className="team-card_img">
				<img src={elm.imageSrc} alt="Team Image" />
			</div>
			<div className="team-card_content">
				<h3 className="team-card_title text-white">
					{/* <NavLink to={`/team-details/${elm.id}`}>
            {elm.name}
          </NavLink> */}
					{elm.name}
				</h3>
				<span className="team-card_desig">{elm.designation}</span>
			</div>
		</div>
	);
}
