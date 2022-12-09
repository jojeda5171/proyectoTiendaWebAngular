import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'toz-cambiopass',
  templateUrl: './cambiopass.component.html',
  styleUrls: ['./cambiopass.component.css']
})
export class CambiopassComponent implements OnInit {

  hidePassword = true;
  formReg: FormGroup;

  constructor(private userService: UserService, private router:Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //ojo
    this.userService.actualizarPassword(this.formReg.value.password)
      .then(response => { console.log(response);
        this.router.navigate(['']);
      alert('Usuario actualizado correctamente');})
      .catch(error => {console.log(error)
      alert('Error al actualizar el usuario')});
  }

  onClick() {
    alert('Proceso cancelado');
    this.router.navigate(['']);
  }

}
