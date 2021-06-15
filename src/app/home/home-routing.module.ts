import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';

export const routes:Route[] = [
{path:'', 
children:[
    {path:'login', component:DashboardComponent},
    {path:'signup', component:SettingsComponent},
    {path:'forgot', component:ProductsComponent}
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class HomeRoutingModule{

}



