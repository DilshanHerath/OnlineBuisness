import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AlertModule} from 'ngx-alerts';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DressComponent } from './component/dress/dress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { TopsComponent } from './component/tops/tops.component';
import { OfficeComponent } from './component/office/office.component';
import { TshirtsComponent } from './component/tshirts/tshirts.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './component/footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DressComponent,
    TopsComponent,
    OfficeComponent,
    TshirtsComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000}),
    BrowserAnimationsModule,
    MatRadioModule,
    NgxSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
