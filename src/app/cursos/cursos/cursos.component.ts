import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Cursos } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Cursos[]>;
  displayedColumns = ['nome', 'categoria'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService, public dialog: MatDialog) {
    //this.cursos = [];
    //this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.lista().pipe(
      catchError((error) => {
        this.openError('Erro ao carregar cursos');
        return of([]);
      })
    );
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}
}
