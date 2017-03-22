import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
/**
 * Created by michael on 22/03/2017.
 */


@NgModule({
  imports: [CommonModule],
  declarations:[HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule{}
