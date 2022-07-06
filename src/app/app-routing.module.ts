import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsUIComponent } from './pages/sports-ui/sports-ui.component';

const routes: Routes = [
  {
    path: 'sports',
    component: SportsUIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
