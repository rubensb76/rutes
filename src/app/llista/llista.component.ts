import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent implements OnInit {

  nomItem = "";
  idItem = "";
  noms = [];

  constructor(public serveiDades: DadesService,private router: Router) { }

  ngOnInit(): void {
    this.serveiDades.llegeixItem().subscribe(arg => {
      this.noms = arg
    });
  }
  
  inserirItem(){
    this.serveiDades.crearItem(this.nomItem);
  }

  borrarItem(id){
    this.serveiDades.eliminarItem(id);
  }

  detall(nom){
    this.router.navigate(['/detall/'+nom]);
  }

  detall2(id){
    this.router.navigate(['/detall2/'+id]);
  }

}
