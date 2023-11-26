import { Component} from '@angular/core';
import {MapStateService, Overlay} from '..';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureLayers = {};
  overlays = [new Overlay({
                id: 'imagery',
                name: 'CONUS West Historical Imagery',
                opacity: 1.0,
                visible: true,
                showControl: false,
                help: 'Historic imagery',
                mask: 'left',
                maxNativeZoom: 17,
                maxZoom: 18,
                type: {
                  format: 'XYZ',
                  name: 'Historical Imagery',
                  id: 'mt-hist',
                  tileurl: 'https://storage.googleapis.com/landscape-explorer/conus-west-tiles/{z}/{x}/{y}.png'} ,
                bounds: new google.maps.LatLngBounds(
                  new google.maps.LatLng( 41.005779201292384 ,  -120.60604051826046 ),
                    new google.maps.LatLng( 55.12908567856297 ,  -96.300538948688 )),

              }),
              /*new Overlay({
                id: 'treecover',
                name: 'Montana Treecover Expansion',
                opacity: 1.0,
                visible: true,
                help: 'Treecover expansion',
                mask: 'right',
                maxNativeZoom: 13,
                type: {
                  format: 'XYZ',
                  name: 'Treecover Expansion',
                  id: 'mt-tree',
                  tileurl: 'https://storage.googleapis.com/montana-treecover-expansion/v1/{z}/{x}/{y}.png'} ,
                bounds: new google.maps.LatLngBounds(
                  new google.maps.LatLng( 41.005779201292384 ,  -120.60604051826046 ),
                    new google.maps.LatLng( 55.12908567856297 ,  -96.300538948688 )),

              })*/
  ];



  constructor(private mapState: MapStateService) {
   }

  ngOnInit() {
    this.mapState.overlays.next(this.overlays.map((o) => new BehaviorSubject<Overlay>(o)));
  }

}
