import { GoogleMapsOverlay } from '@deck.gl/google-maps/typed';

const default_opacity = 0.6;

export interface Category {
  label: string;
  color: string;
}
export class LegendOptions {
  constructor(
    public label?: string,
    public min?: string,
    public max?: string,
    public palette?: string[],
    public categories?: Category[]) {}
}
export interface OverlayType {
  id: string;
  name?: string | undefined;
  tileurl: string;
  legend?: LegendOptions | undefined;
  format: 'MVT' | 'XYZ';
}

export interface OverlayParameters {
    opacity: number;
    params?: any;
    handlers?: {click: Function, mousemove: Function};
    type: OverlayType;
    bounds?: google.maps.LatLngBounds;
    visible?: boolean;
    help?: string;
    years?: number[];
    minZoom?: number;
    maxZoom?: number;
    minNativeZoom?: number;
    maxNativeZoom?: number;
    mask?: 'left' | 'right';
    legend?: LegendOptions;
    name?: string;
    showControl?: boolean;
    id: string;
    mapIds?: string[];
}

export class Overlay  {

  public id: string;
  public type: OverlayType = {id: 'none', tileurl: '', format: 'XYZ'};
  public minZoom:number;
  public maxZoom = 20;
  public minNativeZoom:number;
  public maxNativeZoom = 17;
  public data: google.maps.Data;
  public tile_params = [];
  public year = 2020;
  public opacity = default_opacity;
  public params: any;
  public mask: 'right' | 'left';
  public showControl = true;
  public handlers: {click: Function, mousemove: Function};
  public bounds: google.maps.LatLngBounds;
  public visible: boolean;
  public help: string;
  public years: number[];
  public legend: LegendOptions;
  public name: string;
  public mapIds: string[];
  public GoogleMapsOverlay: GoogleMapsOverlay;

  constructor(params: OverlayParameters) {
    Object.assign(this, params);
    this.handlers = {
      click: (params.handlers || {click: () => {}}).click,
      mousemove: (params.handlers || {mousemove: () => {}}).mousemove
    };
    this.config(params)
 }

 config(params:any) {

      if(!this.bounds) {
        this.bounds =  new google.maps.LatLngBounds(
          new google.maps.LatLng( 40.005779201292384 ,  -114.60604051826046 ),
          new google.maps.LatLng( 56.12908567856297 ,  -96.300538948688 ));
        }
  }

}
