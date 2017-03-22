import {NgModule} from "@angular/core";
import {HikeComponent} from "./hike.component";
import {BrowserModule} from "@angular/platform-browser";
import {HikeService} from "./hike.service";
/**
 * Created by michael on 20/03/2017.
 */


@NgModule({
  imports: [BrowserModule],
  declarations: [HikeComponent],
  exports: [HikeComponent],
  providers:[HikeService]
})

export class HikeModule{}
