import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {
  suscripcion = {
    nombre:'',
    rut:'',
    dv:'',
    phono:'',
    email:'',
    interes:'',
    comentario:''
  }

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log('submit');
    console.log(this.suscripcion);
  }
}
