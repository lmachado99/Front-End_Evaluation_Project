import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { SignUpSuccessComponent } from './modules/sign-up/sign-up-success/sign-up-success.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { MaintenanceComponent } from './shared/components/maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignUpComponent,
    SignUpSuccessComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
