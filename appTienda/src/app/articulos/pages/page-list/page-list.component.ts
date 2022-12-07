import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toz-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  imgCollection = [
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home1.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home2.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home3.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home4.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home5.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home6.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home7.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home8.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home9.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home10.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home11.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
    { htitle: 'Titulo Persona', hsubtitle: 'Subtitulo Persona', image: '../../../../assets/home12.jpg', ctitle: 'Titulo de la Card', csubtitle: 'Subtitulo de la Card' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
