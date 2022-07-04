import { RadarMapDetails, RadarSettingInterface } from "../interface/";

export const radarMaps: RadarMapDetails = {
  title: "untitled",
  width: 1500,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  print_layout: true
};

export const radarSettings: RadarSettingInterface = {
  quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Datastores" },
    { name: "Data Management" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ]
};
