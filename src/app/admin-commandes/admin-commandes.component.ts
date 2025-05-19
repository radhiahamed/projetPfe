import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-commandes',
  templateUrl: './admin-commandes.component.html',
  styleUrls: ['./admin-commandes.component.css']
})
export class AdminCommandesComponent implements OnInit {
commandes: any;
onEditOrder: any;
onDeleteOrder: any;

  constructor() { }

  ngOnInit(): void {
  }

}
