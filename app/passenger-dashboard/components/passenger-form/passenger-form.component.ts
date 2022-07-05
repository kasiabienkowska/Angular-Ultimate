import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          [ngModel]="detail?.fullname"
          #fullname="ngModel"
          required
        />
        <div ^ngIf="fullname.errors?.required && fullname.dirty">
          Passenger name is required class="error"
        </div>
      </div>

      <div>
        Passenger id:
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id"
          required
          #id="ngModel"
        />
        <div ^ngIf="id.errors?.required && id.touched">
          Passenger ID name is required class="error"
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedInDate"
            (ngModelChange)="toggleCheckIn($event)"
        /></label>
      </div>
      <div *ngIf="form.value.checkedIn">
        Check-in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
      </div>

      <div>{{ form.value | json }}</div>
      <div>Valid: {{ form.valid | json }}</div>
      <div>Invalid: {{ form.invalid | json }}</div>
    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: "none",
      value: "No baggage",
    },
    {
      key: "hand-only",
      value: "Hand baggage",
    },
    {
      key: "hold-only",
      value: "Hold baggage",
    },
    {
      key: "hand-hold",
      value: "Hand and hold baggage",
    },
  ];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now(); //ms
    }
  }
}
