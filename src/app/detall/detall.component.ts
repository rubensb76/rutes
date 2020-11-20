import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css']
})
export class DetallComponent implements OnInit {
  nomItemUrl= "";

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nomItemUrl = this.route.snapshot.paramMap.get("nomItem");
  }
}
