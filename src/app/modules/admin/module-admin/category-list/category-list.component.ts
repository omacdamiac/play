import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { IOptions } from 'src/app/core/models';
import { CategoryService } from '../../commons/service/category.service';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre','estado', 'opciones'];
  dataSource!: MatTableDataSource<IOptions>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  btnAdd = new ButtonNsModel.ButtonClass(
    'Agregar', 'primary', 'borde'
  );
  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
  ) {
  }
  ngOnInit(): void {
    this.listCategories()
  }

  listCategories(): void {
    this.categoryService.getCategories().pipe(take(1)).subscribe({
      next: (response: IOptions[]) => {
        this.dataSource = new MatTableDataSource(response)
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      error: err => console.error(err),
      complete: () => {}
    })
  }

  updateCategories(): void {
    this.dialog.open(UpdateCategoryComponent, {
      data: {
        animal: 'panda'
      }
    });

  }

  deleteCategories(): void {

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
