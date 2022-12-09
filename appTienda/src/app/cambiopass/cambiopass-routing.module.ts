import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCambiopassComponent } from './pages/page-cambiopass/page-cambiopass.component';

const routes: Routes = [
  { path: '', component: PageCambiopassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CambiopassRoutingModule { }
