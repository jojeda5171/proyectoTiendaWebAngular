import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toz-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '../../../../assets/s1.jpg',
      thumbImage: '../../../../assets/s1.jpg',
      alt: 'Ropa Formal',
      title: 'Ropa Formal'
    }, {
      image: '../../../../assets/s2.jpg',
      thumbImage: '../../../../assets/s2.jpg',
      title: 'Color Naranja',
      alt: 'Color Naranja'
    }, {
      image: '../../../../assets/s3.jpg',
      thumbImage: '../../../../assets/s3.jpg',
      title: 'Abrigos Tejidos',
      alt: 'Abrigos Tejidos'
    }, {
      image: '../../../../assets/s4.jpg',
      thumbImage: '../../../../assets/s4.jpg',
      title: 'Camisetas',
      alt: 'Camisetas'
    }, {
      image: '../../../../assets/s5.jpg',
      thumbImage: '../../../../assets/s5.jpg',
      title: 'Uniformes',
      alt: 'Uniformes'
    }, {
      image: '../../../../assets/s6.jpg',
      thumbImage: '../../../../assets/s6.jpg',
      title: 'Pantalones Jeans',
      alt: 'Pantalones Jeans'
    }
];

}
