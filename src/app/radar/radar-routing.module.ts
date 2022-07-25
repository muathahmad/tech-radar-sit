import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", component: ViewComponent },
  { path: "details", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadarRoutingModule {
}
