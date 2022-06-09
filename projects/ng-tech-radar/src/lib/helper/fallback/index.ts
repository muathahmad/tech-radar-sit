import { RadarMapDetails } from "../interface/";

export const radarMaps: RadarMapDetails = {
  title: "untitled", 
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

