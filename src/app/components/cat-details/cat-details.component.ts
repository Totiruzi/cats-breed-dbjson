import { Component, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedsService } from './../../services/breeds.service';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  currentCat: Cat = {
    name: '',
    description: '',
    published: false,
    likes: 0,
    dislike: 0,
  };

  message = '';

  placements = ['top', 'left', 'right', 'bottom'];
  popoverTitle = 'Are you sure?';
  popoverMessage = 'Are you really <b>sure</b> you want to delete this?';
  confirmTex = 'Yes <i class="fas fa-check"></i>';
  cancelText = 'No <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
  trackByValue: TrackByFunction<string> = (index, value) => value;

  constructor(private breedService: BreedsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCat(this.route.snapshot.params.id);
  }

  getCat(id: string): void {
    this.breedService.get(id)
    .subscribe(
      data => {
        this.currentCat = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updatePublished(status: boolean): void {
    const data = {
      name: this.currentCat.name,
      description: this.currentCat.description,
      publish: status
    };

    this.breedService.update(this.currentCat.id, data)
    .subscribe(
      res => {
        this.currentCat.published = status;
        console.log(res);
        this.message = res.message;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateCat(): void {
    this.breedService.update(this.currentCat.id, this.currentCat)
    .subscribe(
      res => {
        console.log(res);
        this.message = 'Cat Successfuly updated';
      },
      error => {
        console.log(error)
      }
    );
  }

  deleteCat(): void {
    this.breedService.delete(this.currentCat.id)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/cats']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
