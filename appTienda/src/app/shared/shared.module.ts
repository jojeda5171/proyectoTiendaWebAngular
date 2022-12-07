import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { getPaginatorIntl, TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    NgImageSliderModule,
    MatGridListModule
  ], exports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    PerfectScrollbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NgImageSliderModule,
    CarruselComponent,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
  ]
})
export class SharedModule { }
