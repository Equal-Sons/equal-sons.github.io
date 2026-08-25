import team_data from "../../data/team";
import TeamSingle from "./team-single";

type IProps = {
	space?: string;
};

const TeamOne = ({ space = "space" }: IProps) => {
	return (
		<div className={`team-area-1 ${space} overflow-hidden`}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="title-area text-center">
							<h2 className="sec-title">The Equal Sons Team</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row gy-4 justify-content-center">
					{team_data.slice(0, 4).map((elm) => (
						<div key={elm.id} className="col-lg-3 col-md-6">
							<TeamSingle elm={elm} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TeamOne;
