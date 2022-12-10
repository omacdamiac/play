import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SesionService } from '../../commons/service/sesion.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss'],
})
export class SesionComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'dia', 'hora', 'opciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sesionesCount!: number;
  constructor(
    private sesionService: SesionService,
    private changeDetector: ChangeDetectorRef,
    public dialogRef: MatDialogRef<SesionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  this.listSesion();
  }

  listSesion() {
    this.sesionService.getSesion().subscribe({
      next: (response: any[]) => {
        this.changeDetector.detectChanges();
        if (response) {

          const sesiones = response.filter((user: any) => {
            if (user.user == this.data) {
              return user;
            }
          });
          this.sesionesCount = sesiones.length;
          this.dataSource = new MatTableDataSource(sesiones);
          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
        }
      },
    });
  }

  delete(id: number): void {
    this.sesionService.deleteSesion(id).subscribe({
      next: () => this.listSesion(),
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
