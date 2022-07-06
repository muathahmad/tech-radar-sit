import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CallbackComponent } from "./callback.component";
import { CallbackRoutingModule } from "./callback-routing.module";
import { CallbackService } from "./service/callback.service";


@NgModule({
  declarations: [
    CallbackComponent
  ],
  imports: [
    CommonModule,
    CallbackRoutingModule
  ],
  exports: [CallbackComponent],
  providers: [CallbackService]
})
export class CallbackModule {
}
