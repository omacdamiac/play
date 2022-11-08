import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, take } from 'rxjs/operators';
import { ICategory, IRating } from 'src/app/core/models';
import { CategoryService } from '../../commons/service/category.service';
import { RatingService } from '../../commons/service/rating.service';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'usuario', 'categoria', 'points','respuestas', 'opciones'];
  dataSource!: MatTableDataSource<IRating>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  categories!: ICategory[];
  constructor(
    private ratingService: RatingService,
    private categoryService: CategoryService,
  ) {

  }
  ngOnInit(): void {
    this.listCat()
    this.listRaring()
  }

  listCat(){
    this.categoryService.getCategories().subscribe({
    next:  res => this.categories = res
    })
  }

  listRaring(): void {
    this.ratingService.getRating().pipe(take(1)).subscribe({
      next: (response: IRating[]) => {
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

  delete(id: number): void {
    this.ratingService.deleteRating(id).subscribe({
      next: () => this.listRaring()
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
