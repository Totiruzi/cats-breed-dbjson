import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { BreedsService } from './../../services/breeds.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats?: Cat[];
  currentCat?: Cat;
  currentIndex = -1;
  name = '';

  constructor(private breedService: BreedsService) { }

  ngOnInit(): void {
    this.retrieveCats();
  }

  retrieveCats(): void {
    this.breedService.getAll()
    .subscribe(
      data => {
        this.cats = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveCats();
    this.currentCat = undefined;
    this.currentIndex = -1;
  }

  setActiveCat(cat: Cat, index: number): void {
    this.currentCat = cat;
    this.currentIndex = index;
  }

  removeAllCats(): void {
    this.breedService.deleteAll()
    .subscribe(
      res => {
        console.log(res);
        this.retrieveCats();
      },
      error => {
        console.log(error);
      }
    );
  }

  searchName(): void {
    this.breedService.findByName(this.name)
    .subscribe(
      data => {
        this.cats = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
