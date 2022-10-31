import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { ICategory, IOptions } from 'src/app/core/models';
import { CategoryService } from '../../commons/service/category.service';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { take } from 'rxjs/operators';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UpdateOptionComponent } from '../update-option/update-option.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'state'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'acciones'];
  expandedElement: any | null;

  dataSource!: MatTableDataSource<ICategory>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listado: any;
  btnAddCategory = new ButtonNsModel.ButtonClass(
    'Agregar categoría',
    'primary',
    'borde'
  );
  btnAddOption = new ButtonNsModel.ButtonClass(
    'Agregar opciones',
    'primary',
    'borde'
  );
  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.listCategories();
  }

  listCategories(): void {
    this.categoryService
      .getCategories()
      .pipe(take(1))
      .subscribe({
        next: (response: ICategory[]) => {
          this.listado = response;
          this.dataSource = new MatTableDataSource(response);
          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
        },
        error: (err) => console.error(err),
        complete: () => {},
      });
  }

  viewModal(cat?: ICategory): void {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: cat,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((catData) => {
      if (catData !== undefined) {
        if (catData.id) {
          this.update(catData);
        } else {
          this.save(catData);
        }
      }
    });
  }

  private save(userData: ICategory) {
    this.categoryService
      .newCategory(userData)
      .subscribe((_) => this.listCategories());
  }

  private update(userData: ICategory) {
    this.categoryService
      .updateCategory(userData)
      .subscribe((_) => this.listCategories());
  }

  viewModalOption(item?: IOptions): void {
    const dialogRef = this.dialog.open(UpdateOptionComponent, {
      data: item,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((itemData) => {
      // console.log(itemData);
      const idC = this.listado.find((e: any) => {if (e.name === itemData.category)return e});
      
      const data = {
        name: itemData.name,
        img: itemData.img,
      };
      idC.options.push(data);
      console.log(idC);

      this.saveOption(idC.id, data);


      // if (itemData !== undefined) {
      //   if (itemData.id) {
      //     this.updateOption(itemData);
      //   } else {
      //     this.saveOption(itemData);
      //   }
      // }
    });
  }

  private saveOption(id: number, userData: any) {
    this.categoryService
      .newOption(id, userData)
      .subscribe((_) => this.listCategories());
  }

  private updateOption(userData: IOptions) {
    this.categoryService
      .updateOption(userData)
      .subscribe((_) => this.listCategories());
  }

  deleteCategory(id: number): void {
    this.categoryService
      .deleteCategory(id)
      .subscribe((_) => this.listCategories());
  }

  deleteOption(id: number): void {
    this.categoryService
      .deleteCategory(id)
      .subscribe((_) => this.listCategories());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
