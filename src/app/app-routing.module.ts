import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WaitScreenComponent } from './wait-screen/wait-screen.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'AddressScreen',component:AddressComponent},
  {path:'WaitScreen',component:WaitScreenComponent},
  {path : "AdminScreen", component:AdminScreenComponent}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
