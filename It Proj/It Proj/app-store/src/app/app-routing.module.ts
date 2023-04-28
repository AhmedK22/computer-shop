import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdComponent } from './add-prod/add-prod.component';
import { AllproductComponent } from './allproduct/allproduct.component';

import { EditComponent } from './edit/edit.component';
import { HddComponent } from './hdd/hdd.component';
import { LabComponent } from './lab/lab.component';
import { PcComponent } from './pc/pc.component';
import { PolicaComponent } from './polica/polica.component';
import { PreviousSalesComponent } from './previous-sales/previous-sales.component';
import { SellComponent } from './sell/sell.component';
import { SsdComponent } from './ssd/ssd.component';
import {HomePageComponent} from './home-page/home-page.component';
import { FilterComponent} from './filter/filter.component';
import { filter } from 'rxjs';
import { DeletedItemComponent } from './deleted-item/deleted-item.component';

const routes: Routes = [
  {path:'',redirectTo:'home-page',pathMatch:"full"},
  {path:'addprod',component:AddProdComponent},
  {path:'allproduct',component:AllproductComponent},
  {path:'sell',component:SellComponent},
  {path:'polica/:client/:td/:invoice',component:PolicaComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'lab',component:LabComponent},
  {path:'pc',component:PcComponent},
  {path:'hdd',component:HddComponent},
  {path:'ssd',component:SsdComponent},
  {path:'prevsales',component:PreviousSalesComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'filter',component: FilterComponent},
  {path:'deletedItem',component: DeletedItemComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
