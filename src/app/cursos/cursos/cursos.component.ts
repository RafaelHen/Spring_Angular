import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Cursos } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Observable<Cursos[]>;
  displayedColumns = ['nome', 'categoria'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursos = [];
    //this.cursosService = new CursosService();
    this.cursos = this.cursosService.lista();
    
  }
  
  ngOnInit(): void {

  }

}
