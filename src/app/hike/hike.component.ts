import {Component, OnInit} from "@angular/core";
import {HikeService} from "./hike.service";
import {Hike} from "../shared/hike";

/**
 * Created by michael on 21/03/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'hike',
  templateUrl: 'hike.component.html'

})

export class HikeComponent{

  // numero: number[];
  hikes:Hike[];


  constructor(private  hikeService:HikeService) {
  }

  ngOnInit(){
    // this.hikes=this.hikeService.getHikes();
    this.hikeService.getHikesFromApi()
                      .subscribe(
                            res=>this.hikes=res);
    console.log(this.hikes);
  }
}
