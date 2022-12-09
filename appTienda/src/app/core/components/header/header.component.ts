import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'toz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
      .then(()=>{
        this.router.navigate(['']);
        alert('Usuario desconectado correctamente');
      })
      .catch(error => console.log(error));
  }

  update(){
    alert('Coloque su nueva contraseña');
    this.router.navigate(['cambiopass']);
  }

}
