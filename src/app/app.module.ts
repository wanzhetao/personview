import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent }         from './app.component';
import { AuthService }          from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonsComponent } from './persons/persons.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';


import { httpInterceptorProviders } from './http-interceptors/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  declarations: [
    AppComponent,
    PersonsComponent,
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
