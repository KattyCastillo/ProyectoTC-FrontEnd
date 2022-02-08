import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; //nuevo
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//para las notficaciones

import { ToastrModule } from 'ngx-toastr'; //nuevo para notificaciones
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { TarjetaCreditoComponent } from './components/tarjetas/tarjeta-credito/tarjeta-credito.component';
import { ListTarjetaCreditoComponent } from './components/tarjetas/list-tarjeta-credito/list-tarjeta-credito.component';
import { FooderComponent } from './components/fooder/fooder.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    TarjetaCreditoComponent,
    ListTarjetaCreditoComponent,
    FooderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //nuevo
    HttpClientModule, //nuevo
    BrowserAnimationsModule, //nuevo para notificaciones
    ToastrModule.forRoot() //nuevo para notificaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
