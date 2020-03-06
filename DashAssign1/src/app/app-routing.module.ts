import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotfoundComponent } from "./Pages/notfound/notfound.component";
import { GoalsComponent } from "./Pages/goals/goals.component";
import { AboutComponent } from "./Pages/about/about.component";
import { NavComponent } from "./template/nav/nav.component";
import { HomehubComponent } from "./template/homehub/homehub.component";

const routes: Routes = [
  { path: "homehub", component: HomehubComponent },
  { path: "about", component: AboutComponent },
  { path: "goals", component: GoalsComponent },
  { path: "", redirectTo: "/homehub", pathMatch: "full" },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
