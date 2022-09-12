import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {
    
    let ed1 = {
      fecha: "2016-2019",
      institucion: "CETIS",
      carrera:"Carrera tecnica en ofimatica",
    };
    let ed2 = {
      fecha: "2019-2022",
      institucion: "Universidad Veracruuzana",
      carrera:"Ingenieria de Software",
    };

    this.education.push(ed1);
    this.education.push(ed2);


  }


}
