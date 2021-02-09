/*import {parseArray} from './parse-array'

const data =  [ 1.5, 6, 12.1, 13, 19.75, 12.1, 19.7, 6, 7.45, 1.5 ];
console.log(parseArray(data, 6, 12.0))
*/

import sumThreat, { RecordTypes } from "./q2.1";
import data from "./data.json";

console.log(sumThreat(data as RecordTypes[], "HIGH"));
