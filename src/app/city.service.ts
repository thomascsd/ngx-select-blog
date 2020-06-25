import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { City } from "./models/City";
import { Distinct } from "./models/Distinct";

@Injectable()
export class CityService {
  constructor(private client: HttpClient) {}

  getCities() {
    return this.client.get<City[]>("/assets/city.json");
  }

  getDistincts(countyCode: string){
    return this.client.get<Distinct[]>('/assets/distinct.json');
  }
}
