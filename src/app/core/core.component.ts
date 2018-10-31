import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  public menuOption = [
    {
      name: "HOME",
      icon: "fas fa-home",
      path: ['Home']
    },
    {
      name: "ORDER",
      icon: "fab fa-first-order-alt",
      path: ['Order']
    },
    {
      name: "INVENTORY",
      icon: "fab fa-acquisitions-incorporated",
      path: ['Inventory']
    },
    {
      name: "VENDORS",
      icon: "fas fa-user-secret",
      path: ['Vendor']
    },
    {
      name: "WAREHOUSE",
      icon: "fas fa-warehouse",
      path: ['Warehouse']
    }
  ]

  public openMenuBar = true;

  constructor() { }

  ngOnInit() {
  }

  public toogleMenubar() {
    this.openMenuBar = !this.openMenuBar;
  }

}
