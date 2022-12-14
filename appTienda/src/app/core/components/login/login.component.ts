import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'toz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.userService.login(this.formReg.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/inicio']);
    })
    .catch(error=>console.log(error));
  }

  onClick() {
    this.router.navigate(['/registro']);
  }

}
