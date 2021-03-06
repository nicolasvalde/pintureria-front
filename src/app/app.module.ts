import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {PanelMenuModule} from 'primeng/panelmenu';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DataScrollerModule} from 'primeng/datascroller';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule, MenubarModule, MenuItem, MenuModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {ClientComponent} from './client/client.component';
import {ClientsComponent} from './clients/clients.component';
import {ProviderComponent} from './provider/provider.component';
import {ProvidersComponent} from './providers/providers.component';
import {CategoriesComponent} from './categories/categories.component';
import {ScrollPanelModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
import {CategoryComponent} from './category/category.component';
import {ListboxModule} from 'primeng/listbox';
import {BrandsComponent} from './brands/brands.component';
import {BrandComponent} from './brand/brand.component';
import {OrderNotesDetailsComponent} from './order-notes-details/order-notes-details.component';
import {OrderNotesDetailComponent} from './order-notes-detail/order-notes-detail.component';
import {OrderNotesComponent} from './order-notes/order-notes.component';
import {OrderNoteComponent} from './order-note/order-note.component';


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},

  {path: 'products', component: ProductsComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},

  {path: 'client', component: ClientComponent},
  {path: 'client/:id', component: ClientComponent},
  {path: 'clients', component: ClientsComponent},

  {path: 'provider', component: ProviderComponent},
  {path: 'provider/:id', component: ProviderComponent},
  {path: 'providers', component: ProvidersComponent},

  {path: 'orderNote', component: OrderNoteComponent},
  {path: 'orderNote/:id', component: OrderNoteComponent},
  {path: 'orderNotes', component: OrderNotesComponent},

  {path: 'onDetail', component: OrderNotesDetailComponent},
  {path: 'onDetail/:id', component: OrderNotesDetailComponent},
  {path: 'onDetails', component: OrderNotesDetailsComponent},

  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {path: 'category/:id', component: CategoryComponent, outlet: 'categoryEdition'}
    ]
  },
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id', component: CategoryComponent},

  {
    path: 'brands',
    component: BrandsComponent,
    children: [
      {path: 'brand/:id', component: BrandComponent, outlet: 'brandEdition'}
    ]
  },
  {path: 'brand', component: BrandComponent},
  {path: 'brand/:id', component: BrandComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ClientComponent,
    ClientsComponent,
    ProviderComponent,
    ProvidersComponent,
    CategoriesComponent,
    CategoryComponent,
    BrandsComponent,
    BrandComponent,
    OrderNotesDetailsComponent,
    OrderNotesDetailComponent,
    OrderNotesComponent,
    OrderNoteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    PanelMenuModule,
    AccordionModule,
    MenuModule,
    AngularFontAwesomeModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    DropdownModule,
    ScrollPanelModule,
    DialogModule,
    ListboxModule,
    DataScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
