import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-and-certificates',
  templateUrl: './achievements-and-certificates.component.html',
  styleUrls: ['./achievements-and-certificates.component.css']
})
export class AchievementsAndCertificatesComponent implements OnInit {

  certificates : Array<any>=[];
  
  constructor() { }

  ngOnInit(): void {

    let cert1 = {
      logro:"Acreditacion Ingles Basico",
      fecha:"2022",
      certificado : [
        {descripcion:"Aprobacion de la primera parte del lenguaje Ingles"},
      ]
    };
    let cert2 = {
      logro:"Tecnico en Ofimatica",
      fecha:"2019",
      certificado : [
        {descripcion:"Titulo otorgado por el CETIS"},
      ]
    };

    this.certificates.push(cert1);
    this.certificates.push(cert2);

  }

}
