import { Component } from '@angular/core';
import { DadesService } from './dades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rutes';
  items: Array<any>;

  // Cridem el servei dades.service
  constructor(public serveiDades: DadesService) {}
  
}
