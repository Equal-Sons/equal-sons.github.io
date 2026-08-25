export interface ISubItems {
  id: number;
  label?: string;
  link?: string;
  title?: string;
  subMenuItems?: {
    id: number;
    label: string;
    link: string;
  }[]
}

export interface IMenuDT {
  id: number;
  title: string;
  isActive?: boolean;
  subMenuItems?: ISubItems[];
  link?: string;
  mega_menu?: {
    id: number;
    menu_details: {
      link: string;
      title: string;
      category: string;
      tag?: string;
    }[],
  }[];
}