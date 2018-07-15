// Angular
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BnkGirlListComponent } from './component/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './component/bnk-girl/bnk-girl.component';
import { InstagramComponent } from './component/instagram/instagram.component';
import { InstagramListComponent } from './component/instagram-list/instagram-list.component';
import { InstagramItemComponent } from './component/instagram-item/instagram-item.component';
import { LoginComponent } from './component/login/login.component';

// Pipes
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';
import { AdminComponent } from './component/admin/admin.component';
import { AdminMemberEditComponent } from './component/admin-member-edit/admin-member-edit.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './guard/auth.guard';

// Route Tables
const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'instagram/:instagramId', component: InstagramComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/edit/:memberId', component: AdminMemberEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    InstagramItemComponent,
    BnkSuffixPipe,
    LoginComponent,
    AdminComponent,
    AdminMemberEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
