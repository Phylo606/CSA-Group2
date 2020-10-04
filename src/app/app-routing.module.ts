import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParasternalMainComponent } from './parasternal-main/parasternal-main.component';
import { ParasternalDetailComponent } from './parasternal-detail/parasternal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/parasternals', pathMatch: 'full'},
  { path: 'parasternals', component: ParasternalMainComponent },
  { path: 'detail/:name', component: ParasternalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }