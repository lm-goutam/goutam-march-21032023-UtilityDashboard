import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TableViewComponent } from './table-view/table-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { DemotableComponent } from './demotable/demotable.component';
import { MyloginpageComponent } from './myloginpage/myloginpage.component';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { TokenpassInterceptor } from './tokenpass.interceptor';
import { IntgUpdateComponent } from './intg-update/intg-update.component';
import { IntegrationComponent } from './integration/integration.component';
import { CreativePushComponent } from './creative-push/creative-push.component';
import { VformComponent } from './vform/vform.component';
import { DaxComponent } from './dax/dax.component';
import { SitemapComponent } from './sitemap/sitemap.component';
// import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
// import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    IntegrationComponent,
    IntgUpdateComponent,
    TableViewComponent,
    DemotableComponent,
    DemoTestComponent,
    MyloginpageComponent,
    CreativePushComponent,
    VformComponent,
    DaxComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatMenuModule,
    NgSelectModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    NgbPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
  ],
  providers: [{
  provide:HTTP_INTERCEPTORS,useClass:TokenpassInterceptor,multi : true 
}
],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }