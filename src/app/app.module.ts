import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

/*
 * Angular module help us organize our application and
 * resolves the template (view) resolution environment
 * by declaring the app.component so that the compiler
 * can find it
*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent,
    SignInComponent,
    TemplateFormControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  //* In Angular, a provider is an instruction to the Dependency Injection (DI) system
  //* on how to obtain a value for a dependency. 
  providers: [],
  bootstrap: [AppComponent]
})

// We identify the class as Angular module by attaching the @NgModule decorator
//The metadata for AppModule class are: declarations, imports, and bootstrap
//properties of the @NgModule decorator
export class AppModule { }
