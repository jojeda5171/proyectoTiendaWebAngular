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

@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ], exports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    PerfectScrollbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
  ]
})
export class SharedModule { }
