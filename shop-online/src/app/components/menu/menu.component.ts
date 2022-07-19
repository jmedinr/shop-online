import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tieredItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tieredItems = [
      {
          label: 'Orders',
          icon: 'pi pi-fw pi-shopping-cart',
          items: [
              {
                  label: 'View',
                  icon: 'pi pi-fw pi-list'
              },
              {
                  label: 'Search',
                  icon: 'pi pi-fw pi-search'
              }

          ]
      },
      {
          label: 'Customers',
          icon: 'pi pi-fw pi-table',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Customer',
                          icon: 'pi pi-fw pi-plus'
                      },
                      {
                          label: 'Duplicate',
                          icon: 'pi pi-fw pi-copy'
                      },

                  ]
              },
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-user-edit'
              }
          ]
      },
      {
          label: 'Shipments',
          icon: 'pi pi-fw pi-envelope',
          items: [
              {
                  label: 'Tracker',
                  icon: 'pi pi-fw pi-compass',

              },
              {
                  label: 'Map',
                  icon: 'pi pi-fw pi-map-marker',

              },
              {
                  label: 'Manage',
                  icon: 'pi pi-fw pi-pencil'
              }
          ]
      },
      {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Settings',
                  icon: 'pi pi-fw pi-cog'
              },
              {
                  label: 'Billing',
                  icon: 'pi pi-fw pi-file'
              }
          ]
      },
      { separator: true },
      {
          label: 'Quit',
          icon: 'pi pi-fw pi-sign-out'
      }
  ];
  }

}

