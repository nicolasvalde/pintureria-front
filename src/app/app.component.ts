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
          {
            label: 'Gestionar rubros',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/categories',
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
        label: 'Operaciones',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Compra',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Venta',
            icon: 'pi pi-fw pi-tags',
          },
          {
            label: 'Presupuesto',
            icon: 'pi pi-fw pi-tags'
          }
        ]
      }
    ];
  }
}
