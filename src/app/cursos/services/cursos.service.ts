import { Injectable } from '@angular/core';

import { Cursos } from '../model/curso';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursosService {



  constructor(private httpClient: HttpClient) { }

  lista(): Cursos[]{
    return [
      { _id: "1", nome: 'Angular', categoria: 'font-end'}
    ]
  }
}
