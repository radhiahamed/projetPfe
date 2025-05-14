import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: 'admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 activeTab: string = 'dashboard';
recentReservations: any;
totalReservations: any;
totalTables: any;

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigateTo(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([`/admin/${tab}`]);
  }

}
