import {NgModule} from "@angular/core";
import {ContadorComponent} from "./contador.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ContadorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent
  ]
})

export class ContadorModule {

}
