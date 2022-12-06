import { Injectable } from '@angular/core';

export interface IMenu {
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'INICIO', url: '/inicio', icon: '/assets/icon/inicio.png' },
    { title: 'ARTICULOS', url: '/articulos', icon: '/assets/icon/articulos.png' },
    { title: 'NIÑOS', url: '/niños', icon: '/assets/icon/niños.png' },
    { title: 'LANZAMIENTOS', url: '/lanzamientos', icon: '/assets/icon/lanzamientos.png' },
    { title: 'FAVORITOS', url: '/favoritos', icon: '/assets/icon/favoritos.png' },
    { title: 'CONTACTOS', url: '/contactos', icon: '/assets/icon/contactos.png' }
  ];

  constructor() {

  }

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find((menu) => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}
