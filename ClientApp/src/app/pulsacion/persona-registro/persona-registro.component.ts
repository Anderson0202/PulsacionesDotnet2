import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from './../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaService) {
    this.persona = new Persona();
  }

  ngOnInit(): void {
  }

  add() {
    if(!this.validar()){
      this.persona.calcularPulsacion();
      this.personaService.post(this.persona);
      alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    }
  }

  validar(): Boolean{
    let error: boolean = false;

    if (!this.validarNumero(this.persona.identificacion)){
      alert('ingrese una identificacion valida');
      error = true;
    }
    if (!this.soloLetras(this.persona.nombre)){
      alert('Ingrese un nombre valido');
      error = true;
    }

    if (this.persona.edad == 0){
      alert('ingrese una edad valida');
      error = true;
    }

    return error
  }

  soloLetras(e) {
    debugger
    let isValid = false;
    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
    if (pattern.test(e.key)){
      isValid = true;
    }
    return isValid;
  }

  validarNumero(numero: string)
  {
    var valoresAceptados = /^[0-9]+$/;
    return numero.match(valoresAceptados)
  }



}
