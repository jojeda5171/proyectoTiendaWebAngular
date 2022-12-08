import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'toz-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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
    this.userService.register(this.formReg.value)
      .then(response => { console.log(response);
        this.router.navigate(['']);
      alert('Usuario registrado correctamente');})
      .catch(error => {console.log(error)
      alert('Error al registrar el usuario')});
  }

  onClick() {
    this.router.navigate(['']);
  }

}
