import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { usuario } from '../modelos/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(public loginservice: LoginService, public router: Router,  public fb:FormBuilder) {
   this.login=this.fb.group({
    emailUsuario:['',[Validators.required]],
    contraseñaUsuario:['',[Validators.required]]

   })
  }

  log(form:usuario) {
    this.loginservice.login(form).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl("inicio/usuario")
    })
  }

  ngOnInit(): void {
  }

}
