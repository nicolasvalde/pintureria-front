import {Component} from '@angular/core';
import {MenuItem} from '../../node_modules/primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-pw pi-file',
        routerLink: '/home',
        expanded: true,
      }, {
        label: 'Productos',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'Nuevo producto',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/product',
        },
          {
            label: 'Listar productos',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/products',
          },
        ]
      }, {
        label: 'Clientes',
        icon: 'pi pi-fw pi-pencil',
        items: [{
          label: 'Nuevo cliente',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/client',
        },
          {
            label: 'Listar clientes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/clients',
          },
        ]
      },

      {
        label: 'Proveedores',
        icon: 'pi pi-fw pi-question',
        items: [{
          label: 'Nuevo proveedor',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/provider',
        },
          {
            label: 'Listar proveedores',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/providers',
          },
        ]
      }, {
        label: 'Preferencias',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {label: 'Save', icon: 'pi pi-fw pi-save'},
              {label: 'Update', icon: 'pi pi-fw pi-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      }
    ];
  }
}
