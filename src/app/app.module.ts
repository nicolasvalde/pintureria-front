import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {PanelMenuModule} from 'primeng/panelmenu';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
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


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'client', component: ClientComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'provider', component: ProviderComponent},
  {path: 'providers', component: ProvidersComponent},
  {path: 'categories', component: CategoriesComponent}, //borrar después
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
    CategoriesComponent
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
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
