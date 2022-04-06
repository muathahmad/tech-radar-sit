export interface RadarMapDetails {
  title: string,
  width: number,
  height: number,
  quadrants: Array<{ name: string }>,
  colors: Array<ColorsInterface>,
  rings: Array<RingInterface>,
  print_layout: boolean,
  entries: Array<EntiresInterface>,
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
export interface EntiresInterface {
    quadrant: number;
    ring: number;
    label: string;
    active: boolean;
    moved: number;
}

export const radarMaps = {
    title: "Sitech Radar",
    width: 1500,
    height: 1000,
    quadrants: [
        { name: "Languages" },
        { name: "Infrastructure" },
        { name: "Datastores" },
        { name: "Data Management" },
    ],
    colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
    },
    rings: [
        { name: "ADOPT", color: "#93c47d" },
        { name: "TRIAL", color: "#93d2c2" },
        { name: "ASSESS", color: "#fbdb84" },
        { name: "HOLD", color: "#efafa9" }
    ],
    print_layout: true
}
