import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    //custom modules
    PassengerDashboardModule,
  ],
})
export class AppModule {}
