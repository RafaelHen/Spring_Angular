import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Cursos } from '../model/curso';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  lista(){
    return this.httpClient.get<Cursos[]>(this.API).pipe(
      first(),
      tap(listaCursos => console.log(listaCursos))
    );

  }
}
