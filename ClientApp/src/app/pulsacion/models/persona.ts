export class Persona {
  identificacion = '';
  nombre = '';
  sexo = '';
  edad = 0;
  pulsacion = 0;

  calcularPulsacion() {
    this.pulsacion = ( ((this.sexo == "F") ? 220 : 210) - this.edad ) / 10;
  }

}
