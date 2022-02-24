import { Component, OnInit } from '@angular/core';

import { Cursos } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];
  displayedColumns = ['nome', 'categoria'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursos = [];
    //this.cursosService = new CursosService();
  }
  
  ngOnInit(): void {
    this.cursos = this.cursosService.lista();
    
  }

}
