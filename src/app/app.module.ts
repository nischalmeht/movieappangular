import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';
import { HttpHeadersInterceptor } from './interceptor/http-header.interceptor';
import { DetailComponent } from './detail/detail.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomeComponent,
    DetailComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeadersInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
