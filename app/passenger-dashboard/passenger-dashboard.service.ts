import { Passenger } from "./models/passenger.interface";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Promise<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .toPromise()
      .then((response: Response) => response.json());
  }

  updatePassengers(passenger: Passenger): Promise<Passenger> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    let options = new RequestOptions({
      headers: headers,
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .toPromise()
      .then((response: Response) => response.json());
  }

  removePassengers(passenger: Passenger): Promise<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .toPromise()
      .then((response: Response) => response.json());
  }
}
