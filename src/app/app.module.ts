import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CommonModule } from '@angular/common';
import { ModalDetailUserComponent } from './components/detail-user/detail-user.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GeolocalizacaoComponent } from './components/geolocalizacao/geolocalizacao.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ModalDetailUserComponent,
    GeolocalizacaoComponent
  ],
  imports: [
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSliderModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyDcf1axIRrUjKWF0EzBzkrOq3KynVergWE'})
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
