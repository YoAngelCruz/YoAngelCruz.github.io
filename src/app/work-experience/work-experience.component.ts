import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha : "2016-2021",
      ubicacion : "Cordoba, Ver",
      puesto : "Socio",
      empresa : "Sinergia SA de CV", 
      logros : [
          {descripcion: "Implementacion de nueva BD"},
          {descripcion: "Nueva estrategia de venta"},

      ]
    };
    let work2 = {
      fecha : "2022-2023",
      ubicacion : "MB, Fortin",
      puesto : "SalesMan",
      empresa : "Burguis los Ciegs", 
      logros : [
        {descripcion: "Actualizacion del hardware a nivel departamento"},
        {descripcion: "Implementacion de metodologia SCRUM"},

    ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);




  }

}
