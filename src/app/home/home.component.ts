import { Component, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { CityService } from "../city.service";
import { City } from "../models/City";

@UntilDestroy()
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cities: City[];
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService
      .getCities()
      .pipe(untilDestroyed(this))
      .subscribe(d => (this.cities = d));
  }
}
