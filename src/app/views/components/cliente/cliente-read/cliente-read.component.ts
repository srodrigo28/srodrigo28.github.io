import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})


export class ClienteReadComponent implements AfterViewInit {
  displayedColumns: string[] = ['codigo', 'nome', 'setor', 'telefone'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  nome: string;
  codigo: number;
  setor: string;
  telefone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nome: 'Orto Dentes', setor: 'Jardim Tiradentes', telefone: '(62) 3537-0999' },
  {codigo: 2, nome: 'CS Sistema', setor: 'Garevelo',telefone: '(62) 3537-0999'},
  {codigo: 3, nome: 'Premier Odonto', setor: 'Buriti Sereno', telefone: '(62) 3537-0999'},
  {codigo: 4, nome: 'Verdurão', setor: 'Bueno', telefone: '(62) 3537-0999'},
  {codigo: 5, nome: 'Colégio LG', setor: 'Marista', telefone: '(62) 3537-0999'},
  {codigo: 6, nome: 'Bio Tec', setor: '0079',telefone: '(62) 3537-0999'},
  {codigo: 7, nome: 'Nigem Mark', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 8, nome: 'Mais Papel', setor: '0079',telefone: '(62) 3537-0999'},
  {codigo: 9, nome: 'Fluorine', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 10, nome: 'Tudo Facil', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 11, nome: 'Escola Futura', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 12, nome: 'Magnesium', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 13, nome: 'Aluminum', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 14, nome: 'Silicon', setor: '0079',telefone: '(62) 3537-0999'},
  {codigo: 15, nome: 'Phosphorus', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 16, nome: 'Sulfur', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 17, nome: 'Chlorine', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 18, nome: 'Argon', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 19, nome: 'Potassium', setor: '0079', telefone: '(62) 3537-0999'},
  {codigo: 20, nome: 'Calcium', setor: '0079', telefone: '(62) 3537-0999'},
];