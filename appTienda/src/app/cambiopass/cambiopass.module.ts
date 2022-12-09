import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambiopassRoutingModule } from './cambiopass-routing.module';
import { CambiopassComponent } from './components/cambiopass/cambiopass.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { PageCambiopassComponent } from './pages/page-cambiopass/page-cambiopass.component';


@NgModule({
  declarations: [
    CambiopassComponent,
    PageCambiopassComponent
  ],
  imports: [
    CommonModule,
    CambiopassRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    CambiopassComponent,
    PageCambiopassComponent
  ]
})
export class CambiopassModule { }
