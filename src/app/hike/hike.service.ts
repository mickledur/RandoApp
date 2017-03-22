import {Injectable} from "@angular/core";
import {Hike} from "../shared/hike";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
/**
 * Created by michael on 22/03/2017.
 */


@Injectable()
export class HikeService {

  // getHikes(){
  //   return this.hikes;
  // }


  constructor(private http:Http) {
  }

  getHikesFromApi(){
    return this.http.get('app/api/hikes.json')
      .do(rex => console.log(rex))
      .map(hikes=>hikes.json());
  }
}
