import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DemotableComponent } from './demotable/demotable.component';
import { MyloginpageComponent } from './myloginpage/myloginpage.component';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { IntgUpdateComponent } from './intg-update/intg-update.component';
import { IntegrationComponent } from './integration/integration.component';
import { CreativePushComponent } from './creative-push/creative-push.component';
import { DaxComponent } from './dax/dax.component';
import { VformComponent } from './vform/vform.component';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
  {
    path:'demo-test', component:DemoTestComponent
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent 
  },
  {
    path: 'integration', component: IntegrationComponent 
  },
  {
    path: 'intg-update', component: IntgUpdateComponent 
  },
  {
    path: 'table-view', component: TableViewComponent
  },
  {
    path: 'demotable', component: DemotableComponent
  } ,
  {
    path: 'creative-push', component: CreativePushComponent,
    children:[
      {path:'dax',component:DaxComponent},
      {path:'vform',component:VformComponent},
    ]
  },
  {
    path: 'sitemap', component: SitemapComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}