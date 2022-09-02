import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const customMap = new CustomMap("map");

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);
// console.log(customMap);

customMap.addMarker(user);
customMap.addMarker(company);
