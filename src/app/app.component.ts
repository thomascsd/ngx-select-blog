import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { City } from "./models/City";
import { Distinct } from "./models/Distinct";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  items: string[] = [];
  cities$: Observable<City[]>;
  ditincts$: Observable<Distinct[]>;

  constructor() {}

  ngOnInit() {
    this.items.push("Angular");
  }
}
