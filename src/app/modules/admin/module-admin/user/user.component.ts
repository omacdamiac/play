import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  nombre: string;
  perfil: string;
  estado: number;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['id', 'nombre', 'perfil', 'estado', 'opciones'];
  dataSource: MatTableDataSource<UserData>;
  users: UserData[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.users = [
      {id: 1, nombre: 'Henry', perfil: 'Administrador', estado: 1},
      {id: 2, nombre: 'Damiac', perfil: 'Administrador', estado: 1},
    ];
    this.dataSource = new MatTableDataSource(this.users);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

