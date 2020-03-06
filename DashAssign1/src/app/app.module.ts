import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./template/nav/nav.component";
import { HomehubComponent } from "./template/homehub/homehub.component";
import { AboutComponent } from "./Pages/about/about.component";
import { GoalsComponent } from "./Pages/goals/goals.component";
import { NotfoundComponent } from "./Pages/notfound/notfound.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomehubComponent,
    AboutComponent,
    GoalsComponent,
    NotfoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
