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
  displayedColumns: string[] = ['id', 'name', 'username', 'rol', 'avatar', 'state', 'actions'];
  dataSource!: MatTableDataSource<IUser>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listProfile!: IProfileCMB[];

  btnAdd = new ButtonNsModel.ButtonClass(
    'Agregar', 'primary', 'borde'
  );
  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
    ) {
    // this.listProfile = LIST_PROFILE;
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

  viewModal(user?: IUser): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(userData => {
      if(userData !== undefined) {
        if(userData.id) {
          this.update(userData);
        } else {
          this.save(userData);
        }

      }
    });
  }

  private save(userData: IUser) {
    this.usersService.newUser(userData).subscribe(_=> this.listUser())
  }

  private update(userData: IUser) {
    this.usersService.updateUser(userData).subscribe(_=> this.listUser())
  }

  deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(_=> this.listUser())
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
