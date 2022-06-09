export interface RadarMapDetails {
  title: string,
  width: number,
  height: number,
  quadrants: Array<{ name: string }>,
  colors: ColorsInterface,
  rings: Array<RingInterface>,
  print_layout: boolean,
  entries?: Array<IEntry>,
}
export interface RingInterface {
    name: string;
    color: string;
}
export interface ColorsInterface {
    background: string;
    grid: string;
    inactive: string;
}

export interface IEntry {
  quadrant: number;
  ring: number;
  label: string;
  description?:string,
  link?: string,
  active: boolean;
  moved: number;
}


