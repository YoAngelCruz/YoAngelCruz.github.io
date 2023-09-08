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
    let cert3 = {
      logro:"Python Curse in Kaggle",
      fecha:"2023",
      certificado : [
        {descripcion:"https://github.com/YoAngelCruz/curse_python/blob/main/Angel%20Cruz%20-%20Python.png"},
      ]
    };

    this.certificates.push(cert1);
    this.certificates.push(cert2);
    this.certificates.push(cert3);

  }

}
