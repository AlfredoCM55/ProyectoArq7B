import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
  registro: FormGroup
  constructor(private fb:FormBuilder, private service:RegistroService, private router: Router) {
    this.registro = this.fb.group({

      nombreUsuario:(['',[Validators.required, Validators.maxLength(30)]]),

      contraseñaUsuario:['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],

      emailUsuario:['',[Validators.required, Validators.email]],

      apellidoUsuario:['',[Validators.required]],

      numeroUsuario:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }
  enviar(){
    const user= this.registro.value;

    console.log(user);



    this.service.registrar(user) .subscribe(data => console.log(data),err =>{

      console.log(err)
      this.router.navigateByUrl(('inicio/login'))
    })
  }

}
