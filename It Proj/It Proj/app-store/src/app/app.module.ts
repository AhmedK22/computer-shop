import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { EditComponent } from './edit/edit.component';
import { SellComponent } from './sell/sell.component';
import { PolicaComponent } from './polica/polica.component';
import { LabComponent } from './lab/lab.component';
import { PcComponent } from './pc/pc.component';
import { HddComponent } from './hdd/hdd.component';
import { SsdComponent } from './ssd/ssd.component';
import { PreviousSalesComponent } from './previous-sales/previous-sales.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FilterComponent } from './filter/filter.component';
import { DeletedItemComponent } from './deleted-item/deleted-item.component';



@NgModule({
  declarations: [
    AppComponent,
    AddProdComponent,
    AllproductComponent,
    EditComponent,
    SellComponent,
    PolicaComponent,
    LabComponent,
    PcComponent,
    HddComponent,
    SsdComponent,
    PreviousSalesComponent,
    HomePageComponent,
    FilterComponent,
    DeletedItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
