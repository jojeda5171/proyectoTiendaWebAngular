import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'toz-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _id: 1, name: 'Facebook', address: 'Confecciones Zambe - Ecuador' },
    { _id: 2, name: 'Twitter', address: 'Confecciones Zambe - Ecuador' },
    { _id: 3, name: 'Instagram', address: 'Confecciones Zambe - Ecuador' },
    { _id: 4, name: 'Youtube', address: 'Confecciones Zambe - Ecuador' },
    { _id: 5, name: 'Google', address: 'Confecciones Zambe - Ecuador' },
    { _id: 6, name: 'Linkedin', address: 'Confecciones Zambe - Ecuador' },
    { _id: 7, name: 'Pinterest', address: 'Confecciones Zambe - Ecuador' },
    { _id: 8, name: 'Whatsapp', address: '0912345678' },
    { _id: 9, name: 'Email', address: 'zamconfeccion@gmail.com' },
    { _id: 10, name: 'Web', address: 'www.confeccioneszambe.com' },
    { _id: 11, name: 'Facebook', address: 'Confecciones Zambe - Ecuador' },
    { _id: 12, name: 'Twitter', address: 'Confecciones Zambe - Ecuador' },
    { _id: 13, name: 'Instagram', address: 'Confecciones Zambe - Ecuador' },
    { _id: 14, name: 'Youtube', address: 'Confecciones Zambe - Ecuador' },
    { _id: 15, name: 'Google', address: 'Confecciones Zambe - Ecuador' },
    { _id: 16, name: 'Linkedin', address: 'Confecciones Zambe - Ecuador' },
    { _id: 17, name: 'Pinterest', address: 'Confecciones Zambe - Ecuador' },
    { _id: 18, name: 'Whatsapp', address: '0912345678' },
    { _id: 19, name: 'Email', address: 'zambe@hotmail.com' },
    { _id: 20, name: 'Web', address: 'www.confeccioneszambe.com' },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "ID" },
    { field: "name", title: "CONTACTO" },
    { field: "address", title: "USUARIO" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  constructor() {
    this.loadContacts();
  }

  ngOnInit(): void {
  }

  loadContacts() {
    this.data = this.records;
    this.totalRecords = this.records.length;
    this.changePage(0);
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm() {
  }

  delete(id: any) {

  }

}
