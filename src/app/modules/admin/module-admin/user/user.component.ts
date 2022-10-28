import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { LIST_PROFILE } from 'src/app/core/constants/text.const';
import { IProfileCMB, IUser } from 'src/app/core/models';
import { UsersService } from '../../commons/service/users.service';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'perfil', 'estado', 'opciones'];
  dataSource!: MatTableDataSource<IUser>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listProfile: IProfileCMB[];

  btnAdd = new ButtonNsModel.ButtonClass(
    'Agregar', 'primary', 'borde'
  );
  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
    ) {
    this.listProfile = LIST_PROFILE;
  }

  ngOnInit(): void {
    this.listUser();
  }

  listUser(): void {
    this.usersService.getUsers().pipe(take(1)).subscribe({
      next: (response: IUser[]) => {
        this.dataSource = new MatTableDataSource(response);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      error: err => console.error(err),
      complete: () => {}
    });
  }

  updateUser(): void {
    this.dialog.open(UpdateUserComponent, {
      data: {
        animal: 'panda'
      }
    });

  }

  deleteUser(): void {

  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
