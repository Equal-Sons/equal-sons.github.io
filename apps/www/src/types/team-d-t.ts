export interface ITeamDT {
  id: number;
  imageSrc: string;
  name: string;
  designation: string;
  bio?: string;
  detailedBio?: string;
  areasOfFocus?: string[];
  email?: string;
  linkedin?: string;
  twitter?: string;
}