import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.component.html',
  styleUrls: ['./geolocalizacao.component.css']
})
export class GeolocalizacaoComponent implements OnInit {

  @Input()
  geolocalizacao;

  
  public lat : number;
  public lng : number;
  public zoom: number = 3;

  constructor() { }

  ngOnInit(): void {

    this.lat = +this.geolocalizacao.lat;
    this.lng = +this.geolocalizacao.lng;

  }

}
