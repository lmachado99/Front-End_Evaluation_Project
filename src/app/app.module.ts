import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { SignUpSuccessComponent } from './modules/sign-up/sign-up-success/sign-up-success.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignUpComponent,
    SignUpSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
