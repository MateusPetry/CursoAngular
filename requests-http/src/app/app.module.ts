import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsubscribeRxjsComponent } from './unsubscribe-rxjs/unsubscribe-rxjs.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeRxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
