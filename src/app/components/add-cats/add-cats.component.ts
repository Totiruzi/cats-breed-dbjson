import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../../models/cat.model';
import { BreedsService } from './../../services/breeds.service';

@Component({
  selector: 'app-add-cats',
  templateUrl: './add-cats.component.html',
  styleUrls: ['./add-cats.component.css']
})
export class AddCatsComponent implements OnInit {
  cat: Cat = {
    name: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private breedService: BreedsService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  saveCat(): void {
    const data = {
      name: this.cat.name,
      desciption: this.cat.description
    };

    this.breedService.create(data)
    .subscribe(
      res => {
        console.log(res);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newCat(): void {
    this.submitted = false;
    this.cat = {
      name: '',
      description: '',
      published: false
    };
  }

}
