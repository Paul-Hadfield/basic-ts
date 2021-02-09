/*import {parseArray} from './parse-array'

const data =  [ 1.5, 6, 12.1, 13, 19.75, 12.1, 19.7, 6, 7.45, 1.5 ];
console.log(parseArray(data, 6, 12.0))
*/

import sumThreat, { RecordTypes } from "./q2.1";

const data: RecordTypes[] = [
  {
    assetId: 1,
    importance: "HIGH",
    threatLevel: 12,
  },
  {
    vesselId: "A",
    assets: [
      {
        assetId: 2,
        importance: "MEDIUM",
        threatLevel: 34,
      },
      {
        assetId: 3,
        importance: "HIGH",
      },
    ],
  },
  {
    vesselId: "B",
    assets: [
      {
        assetId: 4,
        importance: "LOW",
        threatLevel: 35,
      },
      {
        assetId: 5,
        threatLevel: 90,
      },
    ],
  },
  {
    assetId: 1,
    importance: "HIGH",
    threatLevel: 12,
  },
];

console.log(sumThreat(data, "HIGH"));
