import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-detall2',
  templateUrl: './detall2.component.html',
  styleUrls: ['./detall2.component.css']
})
export class Detall2Component implements OnInit {
  idItemUrl = "";
  nomItemSeleccionat = "";
  nomItemModificat = "";

  constructor(public route: ActivatedRoute, public serveiDades: DadesService) { }

  ngOnInit(): void {
    this.idItemUrl = this.route.snapshot.paramMap.get("idItem");
    this.serveiDades.llegeixUnItem(this.idItemUrl).subscribe(resultat => {
      this.nomItemSeleccionat = resultat.payload.data()['nom'];

      console.log("resultat: ", this.nomItemSeleccionat);
    });
  }

  modificarItem(){
    this.serveiDades.modificarItem(this.idItemUrl, this.nomItemModificat)
  }



}
