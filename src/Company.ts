import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.companyName = String(faker.company.name());
    this.catchPhrase = String(faker.company.catchPhrase());
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>Company Name ${this.companyName}</h2>
        <h3>Catchphrase ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
